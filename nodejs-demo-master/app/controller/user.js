var User =require('../models/user');

//注册
exports.signup = function(req,res){
	var _user = req.body;
	User.find({name:_user.username},function(err,user){
		if(err){
			console.log(err)
		}
		if(user.lenth){
			return res.redirect('/')
		}else{
			var user = new User(_user);
			
			user.save(function(err,user){
				if(err){
					console.log(err);
				}
				res.redirect('/userlist');
			})
		}
	})
}

//登录
exports.signin = function(req,res){
	var _user = req.body;
	var _name = _user.username;
	var _password = _user.userpwd;
	
	User.findOne({username:_name},function(err,user){
		if(err){
			console.log(err)
		}
		if(!user){
			return res.redirect('/')
		}

		user.comparePassword(_password,function(err,isMatch){
			if(err){
				console.log(err)
			}
			
			if(isMatch){
				req.session.user = user
				res.redirect('/')
			}else{
				res.redirect('/')
			}
		});
	})
}

//注销
exports.signout = function(req,res){
	delete req.session.user
	//delete app.locals.user
	res.redirect('/')
}

//查看个人
exports.detail = function(req,res){
	var _user = req.body;
	res.redirect('/')
}
//查看用户列表
exports.userlist = function(req,res){
	User.fetch(function(err,users){
		if(err){
			console.log(err)
		}
		res.render('userlist',{
			user:users
		});
	})
}

exports.delete = function(req,res){
	var id = req.query.id
	User.remove({_id: id},function(err,users){
		if(err){
			console.log(err)
			res.json({success: 0})
		}else{
			res.json({success: 1})
		}
	})
}

// 中间件用户登录
exports.signinRequired = function(req, res, next) {
  var user = req.session.user

  if (!user) {
    return res.redirect('/')
  }

  next()
}

exports.adminRequired = function(req, res, next) {
  var user = req.session.user

  if (user.role <= 10) {
    return res.redirect('/')
  }

  next()
}
/*是否当前用户*/