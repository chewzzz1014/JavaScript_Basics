"use strict"

// why primitive can use methods?
// JS creates a special object to hold the value, run the method and then it's been destroyed.

// convert string to upper case
let str = "chewzzz";
str.toUpperCase();  // CHEWZZZ

// round the number to the given precision
let num = 1.3482242;
num.toFixed(2); // 1.35

// we can create "wrapper object" for primitve but not RECOMMENDED

typeof 0; // "number"
typeof new Number(0);  // "object"

// object are always truthy
let zero = new Number(0);
if(zero){
  alert("Zero is truthy.")  // will be outputted
}
