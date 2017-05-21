var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
	console.log('request was made: ' + req.url);
	res.writeHead(200,{'Content-Type': 'application/json'});
	var myObj = {
		name: 'AlexZ33',
		job: "Engineer",
		age: '26'
	}
	res.end(JSON.stringify(myObj)); //end()括号内是string 或者buffer，所以我们不能直接用myObj这个对象，要转换
});

server.listen(3000,'127.0.0.1');
console.log('now listening to port 3000');