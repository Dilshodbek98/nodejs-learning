const EventEmitter = require("node:events");

// console.log(events);

const emitter = new EventEmitter();

emitter.on("messageAdded", (args) => {
  console.log("first", args);
});
emitter.on("messageAdded", (args) => {
  console.log("second", args);
});
emitter.on("complete", (args) => {
  console.log("third", args);
});

// console.log(emitter.listeners("messageAdded"));

emitter.emit("messageAdded", [1, 2, 3]);
