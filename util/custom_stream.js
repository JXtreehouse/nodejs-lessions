var stream = require('stream')
var util = require('util')


function ReadStream() {
	stream.Readable.call(this)
}

util.inherits(ReadStream,stream.Readable)

ReadStream.prototype._read = function() {
	this.push('I')
	this.push('Love')
	this.push('jxdxsw.com\n')
	this.push(null)


}

function WriteStream() {

	stream.Writable.call(this)
	this._cached = new Buffer('')

}

util.inherits(WriteStream,stream.Writable)

WriteStream.prototype._write = function(chunk,encode,callback) {

	console.log(chunk.toString());
	callback()
}



function TransformStream() {
	stream.Transform.call(this)
}

util.inherits(TransformStream,stream.Transform)

TransformStream.prototype._transform = function(chunk,encode,callback) {
	this.push(chunk)
	callback()

}

TransformStream.prototype._flush = function(callback) {

	this.push('Oh my God!')
	callback()
	
}

var rs = new ReadStream()
var ws = new WriteStream()
var ts = new TransformStream

rs.pipe(ts).pipe(ws)


 






