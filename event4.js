var events = require('events');
var em = new events.EventEmitter();

em.on('FirstEvent', function (data) {
    console.log('Sreeram: ' + " " + data);
});

em.emit('FirstEvent', 'Have a happy journey...');