"use strict"

let arr = ["I","am","learning","Javascript", "!"];

//splice() : remove and insert

arr.splice(3,0,"Array","in"); //I am learning Array in Javascrript !
alert(arr);

//slice() : simply "slice" the array into smaller size array
let arr2 = arr.slice(3,6) //index 3 (inclusive) to 6 (exclusive)

//concat() : concatenate array with another array/elements
alert(arr.concat("!","!"))
alert(arr.concat(["Long","way","to","go"],"!","!"));


//forEach() : iterating every element of Array
arr.forEach( function(ele, idx, arr){alert(`I found ${ele} at index ${idx} of array ${arr}!`);} );


//searching for element in Array
alert(arr.indexOf("!",2)); //find element starting from idx 2
alert(arr.lastIndexOf("!",-2)); //find from back
alert(arr.includes(".")); //false. arr didn't contain .



//find() : useful for finding specific item based on condition
alert(arr.find(item => item>"a")); //using arrow function
//am

//filter() : similar to find() but return all elements that satisfy condition
alert(arr.filter(item => item>"a")) //
//am, learning, in


//map() : modify the whole array and return the result Array

let arr3 = arr.map( function(ele){ return ele.length;});
arr3.forEach(alert); //1, 2, 8, 5, 2, 10, 1


//sort() : sort lexicographically (not for number) in place
alert(arr.sort());
alert(arr); //same as arr.sort()

let numArr = [23,90,1,4,89]
alert(numArr.sort()); //1, 23, 4, 89, 90
//implement a function when sort numeric Array

function compareNumeric(a,b){
  if (a>b) return 1;
  else if (a==b) return 0;
  else return -1;
}

alert(numArr.sort(compareNumeric)); //1, 4, 23, 89, 90
