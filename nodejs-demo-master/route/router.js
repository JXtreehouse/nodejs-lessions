var Comment = require('../app/controller/comment');
var Index = require('../app/controller/index');
var Topic = require('../app/controller/topic');
var User = require('../app/controller/user');

module.exports = function (app) {
	//使用路由
	app.use(function (req, res, next) {
		var _user = req.session.user;
		app.locals.user = _user;
		next();
	});
	
	/*首页*/
	app.get('/',Index.index);
	
	/*Topic*/
	app.get('/topic/edit',User.signinRequired,Topic.new);
	app.get('/topic/edit/:id',User.signinRequired,Topic.edit);
	app.post('/edit/update',User.signinRequired,Topic.update);
	app.get('/topic/delete/:id',User.signinRequired,Topic.delete);
	app.get('/topic/:id', Topic.detail);
	
	//评论
	app.post('/comment',User.signinRequired,Comment.save);
	app.post('/comment/update',User.signinRequired,Comment.update);

	/*用户*/
	app.post('/signup',User.signup);
	app.post('/signin',User.signin);
	app.get('/signout',User.signout);
	app.get('/user/:id',User.detail);
	app.get('/userlist',User.signinRequired,User.adminRequired,User.userlist);
	app.delete('/user/delete',User.delete);
	
	
	/*快讯*/
	app.get('/news', function(req, res){
		res.render('news');
	});
	/*关于我们*/
	app.get('/about', function(req, res){
		res.render('about');
	});
	//接收GET/POST请求
	app.get('/success', function(req, res){
		//res.send('GET request to the homepage');
		res.json({
		    "status": 0,
		    "msg": "成功啦",
		    "data": "555"
		});
	});
	//错误处理器
	//放在最后，后面的请求不接受
	app.use(function(err, req, res, next) {
	  console.error(err.stack);
	  res.status(500).send('Something broke!');
	});
	//404页面捕获
	app.use(function(req, res, next) {
	  res.status(404).send('404页面'+'\n'+'<a href="/">回到主页</a>');
	});
  
}