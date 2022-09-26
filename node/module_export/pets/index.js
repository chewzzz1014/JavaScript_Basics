// combine objects in bird, cat and dog
// this is main file of this dir

const dog = require("./dog");
const bird = require("./bird");
const cat = require("./cat");

const pets = [
  dog, bird, cat
];

module.exports = pets;

// console.log(pets);
