/* create by AlexZ33 */

var fs = require('fs');

fs.open('1.txt', 'r', function(err, fd) {
  if(err) {
  	console.log('文件打开失败');
  }else{
  	//读取文件
  	/*
  	* fs.read(fd, offset, length, position ,callback)
  	* fd: 通过open方法成功打开一个文件返回的编号
  	* buffer: buffer对象
  	* offset: 偏移量  新的内容添加到buffer中的起始位置 下面的例子从buffer对象第0 位开始读取
  	* length : 添加到buffer中内容的长度
  	* position: 读取的文件中的起始位置
  	* callback: 回调
  	*   err
  	*   buffer的长度.
  	*   新buffer对象
  	 */
  	var buffer1 = new Buffer(10);
  	console.log(buffer1);
  	fs.read(fd, buffer1, 0, 4, null, function (err, len, newBf) {
  		console.log(buffer1);
  		console.log(len);
  		console.log(newBf);
  	})
  }
})