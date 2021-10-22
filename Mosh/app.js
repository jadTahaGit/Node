// function sayHello(name) {
//   console.log("Hello " + name);
// }

// sayHello("Jad");

// ----------------------------- Global-------------------------------------

// We don't have window in node:
// console.log(window);
// global instead of window
// Some functions:
// setTimeout();
// clearTimeout();
// setInterval();
// clearInterval();

// var message = "";
// console.log(global.message);

// ----------------------------- Modularity -------------------------------------
// Every File is an module & Every variable or function in this file is scope.

// console.log(module);

// const logger = require("./logger");
// const log = require("./logger");
// var logger = require("./logger");
// logger = 1;
// console.log(logger);
// logger.log("message");
// log("message");

// To see where do the problem come from;
// jshint app.js

// ----------------------------- Path module -------------------------------------

// const path = require("path");

// var pathObject = path.parse(__filename);

// console.log(pathObject);

// ----------------------------- OS module -------------------------------------

// const os = require("os");

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log(`TotalMemory: ${totalMemory}`);
// console.log(`FreeMemory: ${freeMemory}`);

// ----------------------------- FS module -------------------------------------

// const fs = require("fs");

// Non Blocking || Asynchronous
// const filesAsynch = fs.readdir("asfdas", function (err, files) {
// Change ./  to "anything"
//   if (err) console.log("Error", err);
//   else console.log("Result", files);
// });

// Blocking || Synchronous:
// const files = fs.readdirSync("./");
// console.log(files);

// ----------------------------- Event module -------------------------------------

// const EventEmitter = require("events");
// const emitter = new EventEmitter();

//Register a listener for the event:
// emitter.on("messageLogged", function () {
//   console.log("listener called");
// });

//Raise an event
// emit: Making a noise, produce something - signaling
// emitter.emit("messageLogged");

//------- More Complex: ----------
// emitter.on("messageLogged", function (arg) {
//   //arg, e or eventArg
//   console.log("listener called", arg);
// });

// emitter.on("messageLogged", (arg) => {
//   // arg, e or eventArg
//   console.log("listener called", arg);
// });

// emitter.emit("messageLogged", "1", "url");
// emitter.emit("messageLogged", { id: 1, url: "http://" });

// --------- Exersise -----------------:
// // Raise: logging (data: message)
// // Be carefull to use the same the same event emitter here and in logger.js

// const EventEmitter = require("events");
// const Logger = require("./logger");
// const logger = new Logger();

// //Register a listener for the event:
// logger.on("messageLogged", (eventArg) => {
//   console.log("listener called", eventArg);
// });
// // raise logging event: (See logger.js)
// logger.log("message");

// ----------------------------- HTTP module -------------------------------------

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }
  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
    res.end();
  }
});

// const server = http.createServer();
// server.on("connection", (socker) => {
//   console.log("New connection");
// }); // This is very Low level...

server.listen(3000);

console.log("Listening on port 3000...");
