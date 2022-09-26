// import file (in same dir)
const math = require("./math");
// or
const {PI, square} = require("./math");

console.log(math);  // return what math.js exported in form of object

console.log(math.square(3));  // 9



///////////////////////////////////

// import an entire directory
const pets = require("./pets");
for (let p of pets)
  console.log(p);
