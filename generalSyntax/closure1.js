"use strict"
// variable scope and closure

// variables in non-nested function have the scope from its declaration to end of code block
function doSmth(){
  let myself = "chewzzz";   // the scope of variable "myself" starts
  alert(`Hello,  I'm ${myself} :)`);
}   // scope of "myself" ends here

alert(myself);   //ERROR!


// nested function that returns a function
function makeCounter(){
  let count = 0;
  return function(){ return count++; };
}

let counting = makeCounter();   // counting became a function ( only the function that returned by makeCounter() )

alert(counting());    //0
alert(counting());    //1
alert(counting());    //2

let counting2 = makeCounter();    //independant lexical environment with counting

alert(counting2());   //0
alert(counting2());   //1
alert(counting2());   //2


function sum(a){

  return function (b){
    return a+b;
  };
}

alert(sum(1)(2));   //3


function inBetween(a,b){
  return function (x){
    return x>=a && x<=b;
  };
}

function inArray(arr){
  return function(x){
    return arr.includes(x);
  };
}

let arr = [1,2,3,4,5,6,7,8,9,10];
alert( arr.filter(inBetween(3,6)) );
alert( arr.filter(inArray([2,3])) );
