module.exports = function(io) {
  const express = require('express');
  const router = express.Router();
  // could use one line instead: const router = require('express').Router();
  const tweetBank = require('../tweetBank');

  router.get('/', function (req, res) {
    let tweets = tweetBank.list();
    res.render( 'index', { tweets: tweets, showForm: true } );
  });

  router.get('/users/:name', function(req, res) {
    let name = req.params.name;
    let tweets = tweetBank.find( {name: name} );
    res.render( 'index', { tweets: tweets, showForm: true, name: name } );
  });

  router.get('/tweets/:id', function(req, res) {
    let id = parseInt(req.params.id);
    let tweets = tweetBank.find( {id: id} );
    res.render( 'index', { tweets: tweets, showForm: true  } );
  });

  router.post('/tweets', function(req, res) {
    let name = req.body.name;
    let text = req.body.text;
    tweetBank.add(name, text);
    io.sockets.emit('newTweet', { name: name, text: text });
    res.redirect('/');
  });

  // router.get('/stylesheets',(req,res) =>{
  //     res.sendfile('./public/stylesheets/style.css');
  // });

  return router;
}
