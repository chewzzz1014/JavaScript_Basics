"use strict"

// every time an object is created, its [[Prototype]] is set to Object.prototype

let obj = {};   // equivalent to let obj = new Object()
alert(obj.__proto__ === Object.prototype);    // true
alert(obj.toString === obj.__proto__.toString);    // true
alert(obj.toString === Object.prototype.toString);    // true


// Array/Function/Number -> Object -> null
let arr = [2,4,8];
alert(arr.__proto__ === Array.prototype);   // true
alert(arr.__proto__.__proto__ === Object.prototype);    // true
alert(arr.__proto__.__proto__.__proto__);    // null

function f(){}
alert(f.__proto__ === Function.prototype);    // true
alert(f.__proto__.__proto__ === Object.prototype);    // true

// if one method is available in several prototypes, then the closer method in the chain will be used
console.dir([1, 2, 3]);   // display the inheritance if the array


// primitives (except null and undefined) have object wrappers so that we can access their properties

// modify native prototype (eg., adding methods to the prototype):
// in this case, display() and titleCase() can be used by all String objects
String.prototype.display = function(){
  alert(this);
}
String.prototype.titleCase = function(){
  return this.slice(0,1).toUpperCase()+this.slice(1,).toLowerCase();
}
"cHeWzZz".titleCase().display();

// it's not a good idea to modify native prototypes since prototypes are global and it's easy to result in confliction. One of the methods with the same name will overwrite the another method.
// circumstance that allows modifying native prototype: polyfiling (making substitute for a method that existed in JS specification but not supported by JS engine)

// example of polyfill:
if (!String.prototype.repeat){  // there's no such method? add it to the prototype
    String.prototype.repeat = function(n){
      return new Array(n+1).join(this);
    };
}
alert("chew".repeat(6));    // repeat it 6 times

function f(a, b){
  alert(a+b);
}

Function.prototype.defer = function(n){
    let f = this;
    return function(...args){
      setTimeout( ()=> f.apply(this, args), n);
    }
};

f.defer(1000)(1,2);    // show 3 after 1 seconds
