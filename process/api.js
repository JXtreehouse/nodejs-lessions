
//console.log(process.argv);
// console.log(process.execPath);
// console.log(process.env);
// console.log(process.version);
// console.log(process.pid);
// console.log(process.title);
// console.log(process.arch);
/*setTimeout(function(){},5000 )*/
/* setTimeout(function() {
	   process.exit();
   },5000)*/
/* console.log('test');


process.stdout.write('test');



function Log(data) {
	process.stdout.write(data);
}

Log('hello');*/
/*
//旧模式
//注意: 在"旧模式下" stdin流 默认是暂停的.所以必须通过执行.stdin.resume()来恢复它. 同时process.stdin.resume()会切换到旧模式
process.stdin.resume();
//用于监听用户的输入数据
process.stdin.on('data' , function(chunk) {
	console.log('用户输入了: ' + chunk);

}); */

/*
//新模式下
process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`data: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('end');
}); */

//node.js提供了 os.platform() 或者 process.platform 来检测当前系统
console.log(process.platform);
var os = require('os');
console.log(os.platform());