var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function () {
  console.log('I am Sreeram!' + "screaming..");
}
var myEventHandler1 = function () {
  console.log('I am Sreeram!' + "Performing..");
}
var listener2 = function () {
  console.log('I am Kachi!' + "screaming..");
}
var myEventHandler2 = function () {
  console.log('I am Kachi!' + "Performing..");
}

eventEmitter.on('scream', listener1);
eventEmitter.on('perform', myEventHandler1);
eventEmitter.on('scream', listener2);
eventEmitter.on('perform', myEventHandler2);

eventEmitter.emit('scream');
eventEmitter.emit('perform');
eventEmitter.emit('scream');
eventEmitter.emit('perform');


