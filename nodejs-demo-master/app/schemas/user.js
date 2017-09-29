var mongoose=require('../../config')
var bcrypt = require('bcrypt-nodejs')
var SALT_WORK_FACTOR = 10
/**
 * 声明User对象
 */
var UserSchema = new mongoose.Schema({          
    username : {
    	unique: true,
    	type: String
    },                    					 //用户账号
    userpwd	: String,                        //密码
    role:{
    	type: Number,
    	default : 0
    },										/*0:临时，1注册用户，10管理员，50超级管理员*/
    meta: {
	    createAt: {
	      type: Date,
	      default: Date.now()
	    },
	    updateAt: {
	      type: Date,
	      default: Date.now()
	    }
  	}                      					//最近登录时间
});

UserSchema.pre('save',function(next){
	var user = this ;
	
	if(this.isNew){
		this.meta.createAt = this.meta.updateAt = Date.now();
	}else{
		this.meta.updateAt = Data.now();
	}
	
	bcrypt.genSalt(SALT_WORK_FACTOR,function(err,salt){
		if (err) return next(err)
		
		bcrypt.hash(user.userpwd,salt,null,function(err,hash){
			if(err) return next(err);
			user.userpwd = hash;
	   		next();
		})
	})
});

UserSchema.methods = {
	comparePassword:function(_password,cb){
		var self = this ;
		bcrypt.compare(_password, self.userpwd ,function(err,isMatch){
			if(err) return cb(err);
			
			cb(null,isMatch)
		})
	}
}

UserSchema.statics={
	fetch:function(cb){
		return this
		.find({})
		.exec(cb)		
	},
	findById:function(id,cb){
		return this
		.findOne({_id:id})
		.exec(cb)		
	}
}
module.exports=UserSchema;