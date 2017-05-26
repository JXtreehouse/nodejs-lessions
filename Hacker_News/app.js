var http = require('http')
var fs = require('fs')

var server = http.createServer()

server.on('request', function(req, res) {
  var url = req.url
  if(url === '/'){
    fs.readFile('./views/index.html',function(err, data) {
    	if (err) {
    		throw err
    	}
    	res.writeHead(200, {'Content-Type' :'text/html'})
    	res.end(data)
    })

  }else if(url.startsWith('/static')){//判断条件也可是url.indexOf('/static')

    var staticFilePath = '.'+ url 
    fs.readFile(staticFilePath, function(err, data) {
    	if(err) {
    		res.writeHead(404)
    		return res.end()
    	}
    	res.end(data)
    })
  	
  }else if (url === '/login'){

  	fs.readFile('./views/login.html',function(err, data) {
    	if (err) {
    		throw err
    	}
    	res.writeHead(200, {'Content-Type' :'text/html'})
    	res.end(data)
    })

  }else if (url === '/favicon.ico'){

  	fs.readFile('./static/image/favicon.ico',function(err, data) {
    	if (err) {
    		throw err
    	}
    	res.end(data)
    })

  }
  else {
  	res.writeHead(404)
  	res.end('404 Not Fount')
  }
})


server.listen(3000, function () {
	console.log('Server is running at port 3000');
	console.log('   Please visit http://127.0.0.1:3000/');
})