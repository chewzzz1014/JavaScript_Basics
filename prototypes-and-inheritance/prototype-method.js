"use strict"

// __proto__ is considered outdated and deprecated
// we will use methods to access and modify prototype instead

let animal = {
  sleeps: true,
  speaks_to_human: false,
};

let lion = Object.create(animal);   // create a new object, lion with animal as its prototypes
alert(lion.speaks_to_human); // false. Inherit from its prototype, animal

alert(Object.getPrototypeOf(lion) === animal); //true
Object.setPrototypeOf(lion, {});  // change the prototype of lion to {}

// creating a clone object with the prototype methods
let clonedAnimal = Object.create(Object.getPrototypeOf(animal), Object.getOwnPropertyDescriptors(animal));
alert(clonedAnimal.speaks_to_human);    // false



let dict = Object.create(null, { // object descriptor
  toString: {   // property "toString" has function, "value" as its key
    value(){
      return Object.keys(this).join();    // return a comma-delimited list of keys (basically mean that convert and return an array of keys)
    }
  }
});

dict.apple = "Apple";
dict.__proto__ = "test";   // __proto__ is just a regular property key here.
/*
  - Object.create(null) creates an empty object without a prototype. [[Prototype]] is null
  - No inherited getter/setter for __proto__
  - such objects are called "very plain" or "pure dictionary" and they're more simpler than the regular plain object {}
  - such objects will lack any built-in object methods (e.g. toString)
*/

// display the properties in the object dict
for (let key in dict)
  alert(key);

// calling toString explicitly
// if we did not declare toString, [object Object] will be outputted instead
alert(dict);    // "apple,__proto__"
