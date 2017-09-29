var mongoose=require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
/**
 * 声明forum对象
 */
var CommentSchema=new mongoose.Schema({
	topic: {type: ObjectId, ref: 'Topic'},
  	from: {type: ObjectId, ref: 'User'},
  	reply: [{
	    from: {type: ObjectId, ref: 'User'},
	    to: {type: ObjectId, ref: 'User'},
	    content: String
  	}],
  	content: String,
	meta:{
		createAt:{
			type:Date,
			default:Date.now()
		},
		updateAt:{
			type:Date,
			default:Date.now()
		}
	}
});
/**
 * 为模式添加保存
 * 每次存储之前调用
 */
CommentSchema.pre('save',function(next){
	if(this.isNew){
		this.meta.createAt=this.meta.updateAt=Date.now();
	}else{
		this.meta.updateAt=Date.now();
	}
	next();
});
/**
 * 静态方法 
 * 查询/id查询
 */
CommentSchema.statics={
	fetch:function(cb){
		return this
		.find({})
		.sort({'meta.updateAt':-1})
		.exec(cb)		
	},
	findById:function(id,cb){
		return this
		.findOne({_id:id})
		.exec(cb)		
	}
}
//模式导出
module.exports=CommentSchema;