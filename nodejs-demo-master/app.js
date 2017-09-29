var express = require('express');
var ejs = require('ejs');
var path=require('path');
var bodyParser = require('body-parser');
var session = require('express-session')
var mongoStore = require('connect-mongo')(session);

var app = express();
var port = 3000;

//一个接受form请求，一个接受json请求，解析的规则不一样
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.locals.moment = require('moment')
app.use(session({
	secret: 'nbaForum',
  	store: new mongoStore({
	  	url:'mongodb://localhost/nbaForum',
	  	collection:'sessions'
  	})
}));
//配置静态文件路径
app.use(express.static(path.join(__dirname,'public')));
//设置ejs模板和路径
app.engine('html',ejs.__express);
app.set('view engine','html');
app.set('views', __dirname + '/app/views');

//路由
require('./route/router')(app)


app.listen(port, function() {
    console.log('Listening on port %d', port);
});