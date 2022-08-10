"use strict"

let myArr = new Array(); //or let myArr = []

//array can contain any type of value
myArr = ["a", 1234, true, {name:"zzz", age:20}, function(){alert("Hello");} ];
alert(myArr[2]); //true
alert(myArr[3].age) //20
myArr[4]();


//basic operations of Array
myArr.push("Appended"); //append to the end of array
alert(myArr.pop()); //extract last element and return it

myArr.unshift("Unshifted"); //add to the front of Array
alert(myArr.shift()); //extract first element and return it


//iterationg over elements in array
for (let ele of myArr) //or for(let idx in myArr)
  alert(ele);

myArr.forEach(function(ele){ alert(ele); } );


//modifying length property of Array
let anotherArray = ["a", 1234, true, {name:"zzz", age:20}, function(){alert("Hello");} ];

anotherArray.length = 2 ; //truncate array. anotherArray contains 2 elements noew
alert(anotherArray);  // ["a", 1234]
