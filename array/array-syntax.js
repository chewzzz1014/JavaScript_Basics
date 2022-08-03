"use strict"

// warning: creating holes in the array
const arr = ["Bus", "Car", "Van"];
arr[10] = "Bicycle";
console.log([5]); // undefined
console.log(arr.length);  // 11


// array does not support arrays with named indexes
// no error but produces unexpected result
const arr1 = [];
arr1["fav"] = "Animal";
arr1["unpleasant"] = "frog";
console.log(arr1[0]);  //undefined
console.log(arr1.length); //0

// named indexes in js refer to object
const obj = {};
obj["fav"] = "Animal";
obj["unpleasant"] = "frog";
console.log(obj["fav"]);  // Animal
console.log(obj[0]);  //undefined
console.log(obj.length); //undefined


// check is arrays
Array.isArray(arr); // true
