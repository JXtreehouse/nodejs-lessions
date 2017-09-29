var mongoose=require('../../config');//读取模式

var TopicSchema=require('../schemas/topic');

//编译生成模型
var Topic=mongoose.model('topics',TopicSchema);

module.exports = Topic; 
