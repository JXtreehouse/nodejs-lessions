'use strict'

var koa = require('koa')
var xss = require('xss')


var app = new koa()

app.use(function *() {
  var echo = this.query.echo
  var snippet1 = '<!DOCTYPE html><html><head><title>回声机</title>'

  var snippet2 = '</head><body><div class="wrap"><span style="border:1px solid #ddd;">'
  var snippet3 = '</span></div></body></html>'
  var snippet4 = '<style>.wrap span{ color:red} </style>'

  if (!echo) {
    this.body = snippet1 + snippet4 +snippet2 +'哔哔哔！我听不到你！' +snippet3;
    console.log(this.body);
  }
  else {
    echo = xss(echo)

    // 对输入的内容做一些必要的安全过滤
    this.body = snippet1 + echo + snippet3
  }
})

app.listen(3000)

console.log('成功启动服务，端口是 3000')


