var events = require('events');
var util = require('util');

//object constructor
var Person = function(name) {
	this.name = name;
}

util.inherits(Person, events.EventEmitter)

var AlexZ33 = new Person('AlexZ33');
var JingXin = new Person('JingXin');
var Tom = new Person('Tom');
var people = [AlexZ33, JingXin, Tom];

people.forEach(function(person) {
  person.on('speak', function(msg) {
  	console.log(person.name + 'said:' + msg);
  });
});

AlexZ33.emit('speak', 'hey dudes');
JingXin.emit('speak', 'I am a lovely girl')