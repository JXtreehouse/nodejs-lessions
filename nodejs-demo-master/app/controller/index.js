var Topic=require('../models/topic');

//index page
exports.index = function(req,res){
	if(req.query.item === undefined){
		req.query.item = 25
	}
	if(req.query.page === undefined){
		req.query.page = 1
	}
	var items = parseInt(req.query.item);
	var starts = (req.query.page - 1) * items ;
	Topic.find({})
		.exec(function(err,alltopics){
			Topic.fetch(items,starts,function(err,topics){
				if(err){
					console.log(err);
				}		
				res.render('index',{
					topic:topics,
					totalPage:Math.ceil(alltopics.length / items),
					curentPage:starts/items,
					items:items
				});
			})
		})
	
}
