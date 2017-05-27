/* create by AlexZ33 */
// fs 模块

var fs = require('fs');

/*
* fs.open(path, flag, [mode], callback)
* path : 要打开的文件路径
* flags: 打开文件的方式 读/写
* mode: 设置文件的模式 读/写/执行 4/2/1 0777
* callback : 回调
*     err: 文件打开失败的错误保存在err里，如果成功 err为null
*     fd :  被打开文件的标识,类似setTimeout等定时器返回的id 后续可以根据编号操作某个指定定时器
 */

fs.open('1.txt','r', function(err, fd) {

})






//fs.openSync(path,flags, [mode])
//fs.open()的同步版本