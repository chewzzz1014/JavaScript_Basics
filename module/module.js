"use strict"

// import and export module

// in doSmth.js
export function doSmth(name){
  alert(`Nice to meet you, ${name}!`);
}

// in main.js
import {doSmth} from "./doSmth.js";
alert(doSmth);

// variables and function in module are module-scoped
// if a module is imported into multiple modules, the code inside the imported module will only be excuted once (at the first time of importing)

// the exports are shared between importers. If something changes the imported code, all other importers will see that

// admin.js
export let config = {};
export function greet(){
  alert(`Nice to meet you, ${config.user}!`);
}

// init.js
import {config} from "./admin.js";
config.user = "chewzzz";  // make changes to the imported code

// another.js
import {greet} from "./admin.js";
greet(); // Nice to meet you, chewzzz!
