const EventEmitter = require('events');
// console.log(EventEmitter);

// how do you listen to the events?

const customEmitter = new EventEmitter();
// this listens to the event
customEmitter.on('response', (name, id) => {
    console.log(`name: ${name}`);
})
customEmitter.on('res', () => {
    console.log('second event');
})
// this emits the event.
// when customEmitter.emit('response') is called, the console.log('data received') function which was registered as an emit listener is executed. 
//the string inside has to match the one that you want to emit. 
// the order of emitting and listening matters. you should always listen before emit.
// you can also pass parameters when you emit 
customEmitter.emit('response', 'john')
customEmitter.emit('res')