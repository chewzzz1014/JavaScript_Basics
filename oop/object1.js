"use strict"
/*
    JS Object
    - Has properties. Immutable names and mutable values
    - Has methods
*/

// example of object literal
const book = {
  title: "1984",
  author: "George Orwell",
  isAvailable: false,

  checkIn: function(){
    this.isAvailable = true;
  },
  checkOut: function(){
    this.isAvailable = false;
  },  // hanging comma
};

console.log(typeof book); // Object
console.log(book.isAvailable); // false
console.log("Checking In...");
book.checkIn();
console.log(book.isAvailable);  // true


// object creation using constructor
const book = new Object();
book.title = "1984";
book.isAvailable = false;
book.checkIn = function(){
  this.isAvailable = true;
};


/*
  "this" keyword
  - for object method, refer to the enclosing Object
  - for standalone function, refer to global object ("window" in browser runtime and "global" in node.js runtime)
  - in strict mode, "this" of standalone function is "undefined"
*/
