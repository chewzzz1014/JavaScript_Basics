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




// arrow function
// will always return something
// must be assigned to a variable or immediately used
const addition = (a,b) => a+b;
const subtraction = (a, b) => a-b;
const mul = (a,b) => a*b;
const div = (a,b) => a%b==0;
const printHello = () => console.log("Hello");
const div2 = (a) => {
  if (a%2==0)
    return "Divisible by 2";
  else
    return "Not Divisible by 2";
}

console.log(`Is 346 divisible by 6?: ${div(346, 6)}`);
console.log(`0 is ${div2(0)}`);
printHello();
