var fs = require('fs')

var readStream = fs.createReadStream('264.mp4')

var writeStream = fs.createWriteStream('The.Big.Bang.Theory.S10E07.mp4')


readStream.on('data',function(chunk) {
	if (writeStream.write(chunk) === false){
		console.log('still cached');
		readStream.pause()
	}
})

readStream.on('end',function(chunk) {
	writeStream.end()
})

writeStream.on('drain',function() {
	console.log('data drains');
	readStream.resume()
})