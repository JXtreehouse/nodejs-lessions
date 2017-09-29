var mongoose=require('../../config');//读取模式

var CommentSchema=require('../schemas/comment');

//编译生成模型
var Comment=mongoose.model('comments',CommentSchema);

module.exports = Comment; 
