const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});



// router.get('/stylesheets',(req,res) =>{
//     res.sendfile('./public/stylesheets/style.css');
// });
module.exports = router;