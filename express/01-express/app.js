var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('this is the homepage');
});

app.get('/contact', function (req, res) {
  res.send('this is the contact page');
});


app.get('/profile/:id', function (req, res) {
  res.send('You requested to see a profile with the id of' + req.params.id);
});// 访问 localhost:3000/profile/123    我们这个服务器会返回给浏览器  You requested to see a profile with the id of 123 


app.get('/profile/:name', function (req, res) {
  res.send('You requested to see a profile with the id of' + req.params.name);
});


app.listen(3000, function () {
  console.log('app is listening at port 3000');
});
//get:  app.get('route',fn)
//post:  app.post('route',fn)
//delete:  app.delete('route',fn)