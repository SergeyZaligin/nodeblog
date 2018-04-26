var express = require('express');
var app = express();
var bodyParser = require('body-parser');

const Post = require('./models/post');

app.set('view engine', 'ejs');

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

let arr = ['item1', 'item2', 'item3'];

app.get('/', function(req, res) {
  res.render('index', {
    arr: arr
  });
});

app.get('/create', function(req, res) {
  res.render('create');
});

app.post('/create', function(req, res) {
  // arr.push(req.body.text);

  const { title, body } = req.body;
  Post.create({
    title,
    body
  }).then(post => console.log(post));

  res.redirect('/');
});

module.exports = app;