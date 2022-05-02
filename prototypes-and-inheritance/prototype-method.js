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
