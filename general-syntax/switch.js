"use strict"

// falsy: empty string, null, undefined, 0


const code = 3;
let msg;

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
    console.log("Invalid Value");
    break;
}

if (msg)  // if msg is not empty string (falsy)
  console.log(`Status: ${msg}`);
