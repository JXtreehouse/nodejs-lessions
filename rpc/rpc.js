// 编码
const payload = {
  service: 'com.alipay.nodejs.helloService:1.0',
  methodName: 'plus',
  args: [1, 2],
}

const body = new Buffer(JSON.stringify(payload));

const header = new Buffer(10)
header[0] = 0
// 开发网络通讯协议的时候操作 Buffer 都应该用大端序的 API，也就是 BE 结尾的。
header.writeInt32BE(1000, 1)

// Header 里面还需要一个  Byte 标记应用层协议的类型，我们称之为 Codec
header[5] = 1; // codec => 1代表是json序列化