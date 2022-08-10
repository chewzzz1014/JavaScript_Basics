"use strict"

// prompts the visitor to enter two numbers and then shows their sum.
let n1 = parseInt(prompt("Enter number 1:"));
let n2 = parseInt(prompt("Enter number 2:"));
alert(`Their sum is ${n1+n2}`);

// repetitvely prompt user until user entered valid numeric input
function readNumber(){
  let n;
  do{
    n = +prompt("Enter a number: ");
    if (n==="" || n==="undefined")
      return null;
  }while(!isFinite(n));
  return n;
}

// generate random number min<= x < max
function random(min, max){
  return Math.floor(Math.random()*(max-min)) + min;
}

// generate random interger min<= x <= max
function randomInteger(min, max){
  return Math.floor(Math.random()*(max-min+1)) + min;
}
