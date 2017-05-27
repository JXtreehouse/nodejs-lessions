 var fs =require('fs')

// fs.readFile('1.txt', function (err, data) {
//   if(err) {
//   	console.log('文件读取失败');
//   }else{
//   	console.log(data.toString());
//   }
// })




// fs.unlink('2.txt', function(err) {
// 	if(err){
// 		console.log('删除失败');
// 	}else {
// 		console.log('删除成功');
// 	}
// })


// fs.rename('2.txt', '2-new.txt', function() {
// 	console.log(arguments);
// })


fs.stat('2-new.txt', function() {
	console.log(arguments);
})