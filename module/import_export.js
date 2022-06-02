"use strict"

// export label is placed before var/function/class declaration
export let arr = [2, 3, 4, 5,6 ];

export const ANNUAL_RATE = 0.045;

export class Person{
  constructor(name){
    this.name = name;
  }
}

// or put export aprt from declarations
function f(){...}
function g(){...}

export { f, g};


// import wildcards
import {f,g} from "./functions.js";

// easier way to import all functions
import * as funcs from "./functions.js";
funcs.f();
funcs.g();

// "as"
import {sayHi as h, sayBye as b} from "./functions.js";
h("chewzzz");
b("chewzzz");

export{sayHi as h, sayBye as b};


// "default" (only one export default per file)

// user.js
export default class User{...}

// main.js
import User from "./user.js" // instead of {User}
