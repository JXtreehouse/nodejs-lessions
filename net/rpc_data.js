const net = require('net');
const socket = net.connect(12200, '127.0.0.1')
const HEADER_LEN = 10 // 头部长度

let buf;

socket.on('data', data => {
  if(!buf) {
    buf = data
  } else {
    buf = Buffer.concat([buf, data])
  }

  while(buf.length > HEADER_LEN) {
    console.log(buf.readInt32BE(6))
    const packetLength = HEADER_LEN + buf.readInt32BE(6)
    if(buf.length > packetLength) {
      // 切分出完整的packet
      const packet = buf.slice(0, packetLength)
      // 处理 packet逻辑
      // ...

      buf = buf.slice(packetLength)
    }
  }
})