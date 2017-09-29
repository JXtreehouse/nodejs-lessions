var Topic=require('../models/topic');
var Comment=require('../models/comment');
var _ = require('underscore');

/*发布*/
exports.new = function(req, res){
	res.render('edit',{
		id:'',
		title:'',
		content:''
	});
}

/*修改*/
exports.edit = function(req, res){
	var id=req.params.id;
	Topic.findById(id,function(err,topic){
		if(err){
				console.log(err);
			}
		res.render('edit',{
			id:id,
			title:topic.title,
			content:topic.content
		});
	});
}

/*表单请求*/
exports.update = function(req, res){
	var id = req.body.topic.id
	var topicObj = req.body.topic
	var _topic
	
	if( id ){
		Topic.findById(id,function(err,topic){
			_topic = _.extend(topic,topicObj)
			console.log(topic)
			_topic.save(function(err,topic){
				if(err){
					console.log(err)
				}
				res.redirect('/topic/'+topic._id);
			})
		});
		
	}else{
		_topic = new Topic(topicObj)
		_topic.save(function(err,topic){
			if(err){
				console.log(err)
			}
			res.redirect('/topic/'+topic._id);
		})
	}
	
}

/*删除话题*/
exports.delete = function(req,res){
	var id = req.params.id
	console.log('删除文章id：'+id)
	Topic.remove({_id: id},function(err,topic){
		if(err){
			console.log(err)
		}else{
			res.redirect('/');
		}
	})
}

/*话题详情*/
exports.detail = function(req, res){
	var id=req.params.id;
	Topic.findById(id,function(err,topic){
		Comment
			.find({topic:id})
			.populate('from','username')
			.populate('reply.from reply.to', 'username')
			.exec(function(err,comments){
				res.render('topic',{
					topic:topic,
					comments:comments
				});
			})
	});
}