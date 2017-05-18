var http = require('http')
var queryString = require('querystring')

var postData = queryString.stringify({

	'message':'用nodejs request测试评论',
	'rid':0,	
})

var options = {
	hostname:'jxdxsw.com',
	port:80,
	path:'/2016/03/07/node_http_crawler/',
	method:'post',
	headers:{

		'Accept':'*/*',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8,en;q=0.6,zh-TW;q=0.4',
		'Connection':'keep-alive',
		'Content-Length':postData.length,
		'Content-Type':'application/x-www-form-urlencoded',
		'Cookie':'PHPSESSID=3cvq8i4p9sq65i074ev98qc8h7; uyan_login_auth=hOAXA97M16MET%2Bd2W69JqLFhoZ4hYYE%2Bubq7rHqSv9HBiU6Dap1GhXulLfbA%2BIQO%2B8YNLMkKnxIrEuoHGs7duLpO23tGJx%2B6yePp5MJnhD64dWFIkEs42Y79ns0zIe2Vaxim09WWDnlwUw4Qq4hS6wYeC6i1BMOS%2FyxAWD9gHW0W3sz4v8QA0bX94nN5vKCPEddpgXyWspMHDrIJHkMoJBK57fILFkf1gg4oPjX953T4XBhMty%2BjfKhVv4GdAgbXZVY37i2kOwq%2B2mvlo78Odmj%2FWFixpDkyz%2FSNzc1yWnZ7W61T4R9Dr0Bzd8UPYbjqyZ8KMUmHjnxk8M3%2FTIXeOQ0qudO%2BSVS6dHMPRrVdGaKNkX%2B6GSiTQSYAK6GF1KHa8UDbuva3q1AF9e8b%2FzmGaFGKzd8JTPHWSG3UV2a%2BRXrnhr5YvZcV10GkvhDoEFoGWWtqhIRuG%2FH%2BIQcI4nUTifXhp0LVSpGe8JwjCzS%2F3CdLtF6pfiYyFA%3D%3D; UM_distinctid=15b5c30b9aba69-0bd6d0fe7faba-7c153f4a-1fa400-15b5c30b9acaaf; __utmt=1; auto_login=true; login_email=775136985%40qq.com; uyan_auths=c3d4fzUdvWRHvnndVY8Lm4ZKF7kfdepCA9EeyQMP965itgKiWeUEj1k0uG6F; syncuyan=FYKQy0bfzAee4ObG5tAm4e1oazjWibnRyT21OjnbhgYXeeKFMNFPZl7GIwrkITRCI2nRaDTrrIU8C4SFY0Njzh9LDSNY6CQzNRkR5S7jlslWnVAdvHFSAWwAitRSIGiysNA6RHYJZTGMKlKSuxFMDqHBFYpPugmy9FBvCSC6fPQ1GRHlLuOWybeLWluOpYrKr%2B6rFfVCLSl3NTd5hZqpJpu4aatXOi9PjYk3NKP88VC58relQYuwUQ%3D%3D; __utma=157093439.1323570900.1491900349.1491900349.1491900349.1; __utmb=157093439.22.9.1491900415448; __utmc=157093439; __utmz=157093439.1491900349.1.1.utmcsr=api.v2.uyan.cc|utmccn=(referral)|utmcmd=referral|utmcct=/v4/comment/',
		'Host':'api.v2.uyan.cc',
		'Origin':'http://api.v2.uyan.cc',
		'Referer':'http://api.v2.uyan.cc/v4/comment/?uid=2128477&frameid=2958382&du=&su=jxdxsw.com%2F2015%2F12%2F30%2F%25E5%25A6%2582%25E4%25BD%2595%25E9%2598%2585%25E8%25AF%25BB%25E5%258E%2586%25E5%258F%25B2%2F&pic=http%3A%2F%2Fon891bjlf.bkt.clouddn.com%2Fimage%2F2code%2Fwechatpay.jpg&url=http%3A%2F%2Fjxdxsw.com%2F2015%2F12%2F30%2F%25E5%25A6%2582%25E4%25BD%2595%25E9%2598%2585%25E8%25AF%25BB%25E5%258E%2586%25E5%258F%25B2%2F&title=%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0%20%7C%20%E5%A6%82%E4%BD%95%E8%AF%BB%E5%8E%86%E5%8F%B2%EF%BC%9F%20%7C%20%E9%95%9C%E5%BF%83%E7%9A%84%E5%B0%8F%E6%A0%91%E5%B1%8B&t=1491900711663',
		'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3013.3 Safari/537.36',
			}

}

var req = http.request(options,function(res){
	console.log('Status:'+ res.statusCode)
	console.log('headers:'+JSON.stringify(res.headers))

	res.on('data',function(chunk){
		console.log(Buffer.isBuffer(chunk))
		console.log(typeof chunk)
	})

	res.on('end',function(){
		console.log('评论完毕！')
	})
	req.on('error',function(e){
		console.log('error:'+e.message);
	})


	
})

	req.write(postData)

	req.end()