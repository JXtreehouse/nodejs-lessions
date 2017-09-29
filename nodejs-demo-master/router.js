var express = require('express');
var router = express.Router();
var Forum=require('./models/forum');
var User =require('./models/user');
var cookieSession = require('cookie-session')
var app = express();

app.use(cookieSession({
  keys: ['key1', 'key2']
}));

// 没有挂载路径的中间件，通过该路由的每个请求都会执行该中间件



module.exports = router;