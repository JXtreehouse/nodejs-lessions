var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();


//addListener
life.on('event',function(who){
console.log( '摸摸' + who + '的头' )
});

life.emit('event',"娴娴");

