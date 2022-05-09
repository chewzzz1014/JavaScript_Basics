"use strict"

// Array -> Object. Array is also instance of Object
alert([2,3,4] instanceof Object);

class Animal{}
alert(new Animal() instanceof Object);

// customize behaviour of instanceof
class Human{
  // any object with the property "canThink" will become an instance of Human
  static [Symbol.hasInstance](obj){
    if (obj.canThink) return true;
  }
}

let me = { canThink: true};
alert(me instanceof Human);   // true
// will call Human[Symbol.hasInstance](obj)

// for classes with no Symbol.hasInstance, check whether Class.prototype is eq to any prototypes in the obj prototype chain

/*
 For examples:
  obj.__proto__ === Class.prototype
  obj.__proto__.__proto__ === Class.prototype

   and so on...
*/
// besides of above alternative, an easier approach would be:
/*
  Class.prototype.isPrototypeOf(obj);
*/
