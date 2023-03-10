// 服务器
var http = require("http");
var server = http.createServer();
server.on("request",function(req,res){

   console.log(req.url)
})
server.listen(8080)