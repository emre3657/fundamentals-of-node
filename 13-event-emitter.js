const EventEmitter = require("events");
const myEmitter = new EventEmitter();

myEmitter.on("response", (name, age) => {
  console.log(`data received, name: ${name}, age: ${age}`);
});

myEmitter.on("response", () => {
  console.log(`some other logic here`);
});

myEmitter.emit("response", "emre", 24.7);

// Notes
// 1 - Event can have more than one listener with the same event name
// 2 - You must register (on) the event before you emit it - order matters
// 3 - The 'on' method can take arguments through 'emit' and use them in the callback
