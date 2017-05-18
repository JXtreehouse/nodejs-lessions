var fs = require('fs')

fs.readFile('logo.png',function(err,origin_buffer) {
  console.log(Buffer.isBuffer(origin_buffer));
  fs.writeFile('logo_buffer.png',origin_buffer,function(err){
  	if (err) console.log(err)
  })

  // var base64Image = new Buffer(orgin_buffer).toString('base64')
  var base64Image = orgin_buffer.toString('base64')

  console.log(base64Image)

  var decodeImage = new Buffer (base64Image,'base64')

  console.log(Buffer.compare(origin_buffer,decodeImage)

  fs.writerFile('logo_decoded.png',decodeImage,function(err){

    if (err) {
      console.log(err)
    }
  })
}) 