var https = require('https')
var fs=require('fs')
var options = {
	key:fs.readFileSync('ssh_key.pem'), //私钥文件
	cert:fs.readFileSync('ssh_cert.pem'),//公钥证书文件

}

https
	.createServer(options,function(req,res){

	res.writeHead(200)
	res.end('hi,jx')

})
	.listen(8090)