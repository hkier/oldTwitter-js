
const express = require('express');
const app = express(); // creates an instance of an express application

const nunjucks = require('nunjucks');
const volleyball = require('volleyball');

const tweetBank = require('./tweetBank')

const routes = require('./routes');
app.use('/', routes);

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true }); // point nunjucks to the proper directory for templates

app.use(express.static('public'))

// let data = tweetBank.data;
// tweetBank.add('Robert', 'Have a great day!')
// console.log(tweetBank.list())

// // tweetBank.find('Robert')
// let properties = function(o) {
//   return o.name === 'Robert';
// }
// console.log('find method = ', tweetBank.find(properties))

let locals = {
  title: 'An Example',
  people: [
    { name: 'Gandalf' },
    { name: 'Frodo' },
    { name: 'Hermione' }
  ]
};

nunjucks.render('index.html', locals, function (err, output) {
 // console.log(output);
});


app.use(volleyball);




app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
  console.log(Date());
})

