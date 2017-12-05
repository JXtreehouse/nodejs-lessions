//删除数据
//以下实例将 name 为 "镜心的小树屋" 的数据删除 :


var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/test';    
 
var delData = function(db, callback) {  
  //连接到表  
  var collection = db.collection('site');
  //删除数据
  var whereStr = {"name":'镜心的小树屋'};
  collection.remove(whereStr, function(err, result) {
    if(err)
    {
      console.log('Error:'+ err);
      return;
    }     
    callback(result);
  });
}
 
MongoClient.connect(DB_CONN_STR, function(err, db) {
  console.log("连接成功！");
  delData(db, function(result) {
    console.log(result);
    db.close();
  });
});

