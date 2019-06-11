
const fs = require('fs')

// 从某个文件创建一个字节流
const stream = fs.createReadStream('test.md', {highWaterMark: 11})

// readable.setEncoding(encoding)

// 默认情况下没有设置字符编码，流数据返回的是 Buffer 对象。 如果设置了字符编码，则流数据返回指定编码的字符串。 例如，调用 readable.setEncoding('utf-8') 会将数据解析为 UTF-8 数据，并返回字符串，调用 readable.setEncoding('hex') 则会将数据编码成十六进制字符串。

// 缺陷： 只能处理UTF-8， Base64, UCS-2/utf-16LE
// 坑点: https://blog.csdn.net/rcjjian/article/details/81238877
stream.setEncoding('utf8')

var data = ''
stream.on('data', function (chunk) {
  data += chunk
})
// console.log('dasddd',stream)

stream.on('end', function () {
  console.log(data)
})