const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var tweets = tweetBank.find( {name: name} );
  // console.log('param:' , req.params);
  console.log('tweets ', tweets);
  res.render( 'index', { tweets: tweets } );
});

router.get('/tweets/:id', function(req, res) {
  var id = parseInt(req.params.id);
  var tweets = tweetBank.find( {id: id} );
    console.log('id ', id);
    console.log('bank ',tweetBank);
  // console.log('param:' , req.params);
  console.log('tweets ', tweets);
  res.render( 'index', { tweets: tweets } );
});

// router.get('/stylesheets',(req,res) =>{
//     res.sendfile('./public/stylesheets/style.css');
// });
module.exports = router;