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

app.get('/', function(req, res) {
  Post.find({}).then((post)=>{
    res.render('index', {
      arr: post
    });
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