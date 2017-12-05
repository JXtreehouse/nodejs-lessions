//查询数据
//以下实例检索 name 为 "镜心的小树屋" 的实例：
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/test';

var selectData = function(db, callback) {
   //连接到表
　　　var collection = db.collection('site');
   // 查询数据
   var whereStr = {"name": '镜心的小树屋'};
   collection.find(whereStr).toArray(function(err, result) {
    if(err)
     {console.log('err:' + err);

      return
     }
    callback(result)
  });
}

MongoClient.connect(DB_CONN_STR, function(err, db) {

  console.log("连接成功");
  selectData(db, function(result) {
   console.log(result);
   db.close();
  });
});
