"use strict"

// notes and exercises from microsoft JavaScript course

// create arrays
let arrLength = 5;
let arr = [];
let arr2 = Array(arrLength);

console.log(arr.length);  //0, no element
console.log(arr2.length); // 5

// store elements and access elements
let arr1 = ["A", true, 2]
console.log(arr1[1]);  // true

arr[0] = "Value at index 0 of array arr";
console.log(arr[0]);
console.log(arr[1]);  // undefined. no such element existed

console.log(arr[arr.length-1]); // last element

// array method
let myArr = ["Some String", 342, true];
console.log(myArr.push("Newly Added")); // push will return new length
console.log(`After Added New Element: ${myArr}`);
console.log(myArr.pop()); // return the popped item
console.log(`After Popped the New Element: ${myArr}`);

console.log(myArr.unshift("Added to Front")); // return new length
console.log(`After Added Element to the Front: ${myArr}`);
console.log(myArr.shift()); // return new length
console.log(`After removed the first element: ${myArr}`);

console.log(`After Concatenation: ${arr1.concat(myArr)}`);
