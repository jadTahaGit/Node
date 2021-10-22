const path = require("path");

// Base file name:
// console.log(path.basename(__filename));

// Directory Name:
// console.log(path.dirname(__filename));

// File extension:
// console.log(path.extname(__filename));

//Create path object:
// console.log(path.parse(__filename));
// console.log(path.parse(__filename).base);
// console.log(path.parse(__filename).root);

//Concatenate paths:
// ../test/hello.html
console.log(path.join(__dirname, "test", "hello.html"));
