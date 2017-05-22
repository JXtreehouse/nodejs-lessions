var bodyParser = require ('body-parser');
var mongoose = require('mongoose');


// Connect to the database
mongoose.connect('mongodb://test:zk1991zk@ds149201.mlab.com:49201/jx');

//create a schema - this is like a blueprint
var todoSchema = new mongoose.Schema({
	item: String
});

// create a model
var Todo = mongoose.model('Todo', todoSchema);
// var itemOne = Todo({item: 'buy flowers'}).save(function(err){
//   if (err) throw err;
//   console.log('item saved');
// });


//var data = [{item: '喝牛奶'},{item: '刷代码'},{item: '遛狗'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function (app) {
  
app.get('/todo', function(req, res) {

	//get data from mongodb and pass it to view 
	Todo.find({}, function(err,data) {
		if (err) throw err;
		res.render('todo', {todos: data});
	});
 
});

app.post('/todo', urlencodedParser, function(req, res) {

	//get data from the view and add it to mongodb
	  var  newTodo =  Todo(req.body).save(function(err, data) {
		if (err) throw err;	
  	res.json(data);  	
	  }) 	
});


app.delete('/todo/:item', function(req, res) {

	//delete thw requested item from mongodb
	Todo.find({item: req.params.item.replace(/\-/g," ")}).remove(function(err, data) {
		if (err) throw err;	
		res.json(data);
	});

});



};