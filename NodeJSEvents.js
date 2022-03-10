const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('Please turn off the motor!');
  setTimeout(() => {
      console.log('Please turn off the motor');
  }, 3000);
});
// myEmitter.emit('event');

console.log("The script is running");
myEmitter.emit("WaterFull");
console.log("The script is still runnig");