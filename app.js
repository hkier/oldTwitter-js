
const express = require('express');
const app = express(); // creates an instance of an express application
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const volleyball = require('volleyball');


const tweetBank = require('./tweetBank')
const routes = require('./routes');

//middleware
app.use(volleyball);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false})); 
// parse application/json
app.use(bodyParser.json())

app.use('/', routes);
app.use(express.static('public'))

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true }); // point nunjucks to the proper directory for templates

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
  console.log(Date());
})

