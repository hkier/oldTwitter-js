const express = require( 'express' );
const app = express(); // creates an instance of an express application

const volleyball = require('volleyball');
const morgan = require ('morgan');

app.use(volleyball);
//app.use(morgan);

app.get('/', function (req,res) {
  res.send('Dave.... What can I do for you?')
}
)

app.get('/news', function (req,res) {
  res.send('All the news that fit to print')
}
)



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
}
)