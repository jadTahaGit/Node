// // Module wraper Function
// // (function (exports, require, module, __filename, __dirname) {});
// // var x=;

// console.log(__filename);
// console.log(__dirname);

// var url = "http://anyrandomlogger.io/log";

// function log(message) {
//   //send an HTTP request
//   console.log(message);

// }

// // module.exports.log = log;
// module.exports = log;
// // module.exports.url = url
// module.exports.endPoint = url;

// ------------------------------ Event Module ----------------------------------------------------

// const EventEmitter = require("events");
// // const emitter = new EventEmitter(); // no need aftter extending EventEmitter in the Logger Class

// var url = "http://anyrandomlogger.io/log";

// class Logger extends EventEmitter {
//   //method:
//   log(message) {
//     //send an HTTP request
//     console.log(message);

//     // Raise an event:
//     this.emit("messageLogged", {
//       // this refers to the EventEmitter
//       id: 1,
//       url: "http://jadtaha.com",
//     });
//   }
// }

// module.exports = Logger;
