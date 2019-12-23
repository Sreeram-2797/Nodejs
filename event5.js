var events = require("events");
var em  = new events.EventEmitter();

em.addListener('FirstEvent', function (data) {
    console.log('RaamPrekash: ' + ' '  + data);
});

em.on('SecondEvent', function (data) {
    console.log('Sreeram: ' + data);
});

em.emit('FirstEvent', 'Hi.. How are you?.');

em.emit('SecondEvent', 'I am fine. what about you.');