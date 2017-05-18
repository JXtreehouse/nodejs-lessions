var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://127.0.0.1:27017/test';

var insertData = function (db, callback) {
	//连接到表site
	var collection = db.collection('site');
	//插入数据
	var data = [{"name":"镜心的小树屋","url":"www.jxdxsw.com"},{"name":"segmentfault","url":"https://segmentfault.com"}];

	collection.insert(data,function(err,result) {
		if(err)
		{
			console.log('Error:' + err);
			return
		}
		callback(result)
	});
}

MongoClient.connect(DB_CONN_STR, function(err,db) {
	console.log('连接成功');
	insertData(db,function(result) {
		console.log(result);
		db.close();
	});
});