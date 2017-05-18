var http =require('http')
var fs = require('fs')
var request = require('request')

http
  .createServer(function (req,res) {
  	// fs.readFile('./buffer/logo.png',function (err,res) {
  	// 	if (err) {
  	// 		res.end('file not exist')
  	// 	}
  	// 	else {
  	// 		res.writeHeader(200,{'Context-Type':'text/html'})
  	// 		res.end(data)
  	// 	}

  	// })
  
   
  	
  	//fs.createReadStream('../buffer/logo.png').pipe(res)
 
  	

    request('https://www.baidu.com/img/bd_logo1.png').pipe(res)
  })
.listen(8090)