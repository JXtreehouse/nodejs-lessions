/* create by AlexZ33 */
//自动合并


var fs = require('fs');
var filedir = './jxtreehouse/source';
fs.watch(filedir, function(ev, file) {
	//console.log(ev + '/' + file);//这里不需要判断file是否有内容
	//只要有一个文件发生变化，我们就要对这个文件夹下的所有文件进行读取，然后合并
	fs.readdir(filedir, function(err, dataList){

		var arr = [];

		dataList.forEach(function(f){
			if(f){
				var info = fs.statSync(filedir + '/' +f);
			//console.log(info);
			if (info.mode == 33206) {
				arr.push(filedir + '/' +f);
			}
			}
		});
		//console.log(arr);

		//读取数组中的文件内容并合并
		var content = '';
		arr.forEach(function(f) {
			var c =  fs.readFileSync(f);
			//console.log(c);
			content += c.toString() + '\n';

		});
		console.log(content);
		fs.writeFileSync('./jxtreehouse/js/index.js', content);
	});

	
	
})

/*
这个过程就是帮助我们自动监听指定目录里面的文件变化，然后自动帮我们合并
按照这种原理:
我们可以实现比如 自动压缩 格式化 还有自动编译之类的
这就是我们前端自动化构建项目管理工具用到的大致原理

 */