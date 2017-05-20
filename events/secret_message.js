var EventEmitter = require('events').EventEmitter;
var secretMessage = new EventEmitter();

secretMessage.on('message', function (data) {
   console.log(data); 
});

secretMessage.on('self destruct', function () {
    console.log('the msg is destroyed!');
});

secretMessage.emit('message','this is a secret message.It will self deatruct in 5s');

setTimeout(function () {
   secretMessage.emit('self destruct');
},5000);