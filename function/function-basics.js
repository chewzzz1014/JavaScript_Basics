"use strict"

// naming convention: no other symbol except $ and _
// if we did not provide value for parameter, it will become undefined

function f(){
  console.log("Nice to meet you!");
}

f("wee"); // it's ok to pass argument to no-args function
console.log(typeof f);

// f1 did not return anything. The return value is undefined
function f1(name){
  console.log(`Nice to meet you, ${name}!`);
}
f1("chewzzz");
f1();   // Nice to meet you, undefined!


// function expression: function is a value
// not hoisted
let greeting = function(name="Guest"){
  console.log(`Nice to meet you, ${name}!`);
}

console.log(greeting);  // print the function code
greeting("chewzzz");


// passing function as argument
function ask(q, yes, no){
  if (confirm(q)) yes();
  else no();
}

function agree(){
  alert("You agreed");
}

function disagree(){
  alert("You disagreed");
}

// no parentheses when passing function code as argument 
ask("Please donate", agree, disagree);
