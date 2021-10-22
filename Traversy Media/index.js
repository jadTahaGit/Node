//-------- 1st print--------------------------------------------
// console.log("Hello From Node.js...");

//-------------Use an Object-------------------------------------
// const person = require("./person");
// console.log(person);

//--------------- Use a Class-------------------------------
const Person = require("./person");
// import Person from "./person"; // (react & ES6) it doesn't work here yet //you have to implent babel to compile it...
const person1 = new Person("Jad", 21);
person1.greeting();
