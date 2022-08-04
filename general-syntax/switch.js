"use strict"

// falsy: empty string, null, undefined, 0


const code = 3;
let msg;  //undefined

// type matters. String will not be converted into number when comparing 'code' to cases
switch(code){
  case 0:
    msg = "Beginner";
    break;
  case 1:
    msg = "Intermediate";
    break;
  case 2:
    msg = "Expert";
    break;
  default:
    console.log("Invalid Value"); // msg = undefined
    break;
}

if (msg)  // if msg is not empty string / undefined (falsy)
  console.log(`Status: ${msg}`);
