//更新数据
//我们也可以对数据库的数据进行修改，以下实例将 name 为 "镜心的小树屋" 的 url 改为 http:youlishu.com



var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/test';    
 
var updateData = function(db, callback) {  
    //连接到表  
    var collection = db.collection('site');
    //更新数据
    var whereStr = {"name":'镜心的小树屋'};
    var updateStr = {$set: { "url" : "http:youlishu.com" }};
    collection.update(whereStr,updateStr, function(err, result) {
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
    updateData(db, function(result) {
        console.log(result);
        db.close();
    });
});

