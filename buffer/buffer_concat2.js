
const fs = require('fs')

// 从某个文件创建一个字节流
const stream = fs.createReadStream('test.md', {highWaterMark: 11})
stream.setEncoding('utf8')

var data = ''
stream.on('data', function (chunk) {
  data += chunk
})
// console.log('dasddd',stream)

stream.on('end', function () {
  console.log(data)
})