var mongoose = require('mongoose'),
    DB_URL = 'mongodb://localhost/nbaForum';
    
/**
 * 连接
 */
mongoose.connect(DB_URL);

/**
  * 连接成功
  */
mongoose.connection.on('connected', function () {    
    console.log('数据库连接成功,连接地址：' + DB_URL);  
});    

/**
 * 连接异常
 */
mongoose.connection.on('error',function (err) {    
    console.log('数据库错误: ' + err);  
});    
 
/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {    
    console.log('数据库断开');  
});  

module.exports = mongoose ;
