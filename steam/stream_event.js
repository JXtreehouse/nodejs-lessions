var fs = require('fs');

var readStream = fs.createReadStream('stream_copy_logo.js');
var n = 0
readStream.on('data',function(chunk) {
	n++
  	console.log('data emits')
  	console.log(Buffer.isBuffer(chunk))
  	// console.log(chunk.toString('utf8'))
  	

  	readStream.pause()
  	console.log('data pause')
  	//设一个定时器模拟异步处理
  	setTimeout(function() {
      console.log('data pause end')
      readStream.resume()
  	},3000)
 })
  .on('readable',function() {
  	console.log('data readable')
  })
  .on('end',function() {
  	console.log(n)
  	console.log('data end')
  })
  .on('close',function() {
    console.log('data close')
  })
    .on('error',function() {
    console.log('data read error' + e)
  })