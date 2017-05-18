var Readable = require('stream').Readable
var Writable = require('stream').Writable


var readStream = new Readable()
var writeStream = new Writable()

readStream.push('I')
readStream.push('Love')
readStream.push('jxdxsw.com\n')
readStream.push(null)

writeStream._write = function (chunk,encode,callback) {
	console.log(chunk.toString());
	callback()
}


readStream.pipe(writeStream)

