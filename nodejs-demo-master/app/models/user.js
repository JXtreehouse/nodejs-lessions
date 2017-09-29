var mongoose=require('../../config');
//读取模式
var UserSchema=require('../schemas/user');
//编译生成模型
var User=mongoose.model('User',UserSchema);

module.exports=User; 