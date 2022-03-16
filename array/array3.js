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
alert(arr.map( function(ele){ return ele.length;}))

//sort() : sort lexicographically (not for number) in place
alert(arr.sort());
alert(arr); //same as arr.sort()

let numArr = [23,90,1,4,89]
alert(numArr.sort()); //1, 23, 4, 89, 90

//1: implement a function when sort numeric Array

function compareNumeric(a,b){
  if (a>b) return 1;
  else if (a==b) return 0;
  else return -1;
}

alert(numArr.sort(compareNumeric)); //1, 4, 23, 89, 90

//2: use short arrow function since any negative number indicates that a is lesser than b or vice verse

alert(numArr.sort( (a,b)=>a-b ) ); //1, 4, 23, 89, 90




//split string into array based on delimiter
let str = "Glad to know you";
let splitedStr = str.split(" ");
splitedStr.forEach(alert); //print the elements one by one


//join every element of array into string. Opposite of split()
let str2 = splitedStr.join(" ");
alert(str === str2 ); //true


//anoter way to iterate over array: array.reduce()
let oddNum = [1,3,5,7,9];
let finalSum = oddNum.reduce(function(sum, currentItem, currentIndex, array){
        sum+=currentItem;
        alert(`We've got ${currentItem} at index ${currentIndex} of array ${array}. The sum is ${sum} for now!`);
        return sum;
} , 0); //count sum starting from index 0 of array oddNum
alert(`Finally, we got ${finalSum}!`);

//checking whether it's Array
alert(typeof oddNum); //object
alert(Array.isArray(oddNum)); //true
alert(Array.isArray({})); //false. it's an object
