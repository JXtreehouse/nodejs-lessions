var Comment=require('../models/comment');

/*发布*/
exports.save = function(req, res){
	var _comment = req.body.comment;
	var topicId = _comment.topic;
	var comment = new Comment(_comment);
	
	comment.save(function(err,comment){
		if(err){
			console.log(err)
		}
		res.redirect('/topic/'+topicId);
	})
}
/*回复*/
exports.update = function(req, res){
	var reply = req.body.reply;
	var commentId = reply._id;
	
	Comment.findById(commentId, function(err, comment) {
		var _reply = {
	        from: reply.from,
	        to: reply.to,
	        content: reply.content
      	}
		
		comment.reply.push(_reply);
		
		comment.save(function(err,comments){
			if(err){
				console.log(err)
			}
			res.redirect('/topic/'+comments.topic);
		})
	})	
		
}