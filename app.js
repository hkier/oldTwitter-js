
const express = require('express');
const app = express(); // creates an instance of an express application

const nunjucks = require('nunjucks');

const volleyball = require('volleyball');

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true }); // point nunjucks to the proper directory for templates


let locals = {
  title: 'An Example',
  people: [
    { name: 'Gandalf' },
    { name: 'Frodo' },
    { name: 'Hermione' }
  ]
};

nunjucks.render('index.html', locals, function (err, output) {
  console.log(output);
});


app.use(volleyball);

app.get('/', function (req, res) {
  const people = [{ name: 'Full' }, { name: 'Stacker' }, { name: 'Son' }];
  res.render('index', { title: 'Hall of Fame', people: people });
})

app.get('/news', function (req, res) {
  res.send('All the news that fit to print')
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

