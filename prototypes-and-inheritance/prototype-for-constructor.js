"use strict"

// setting up Prototype through constrcutor of an Object

let animal = {
  eats: true,
  sleeps: true,
};

// constrcutor of object Cat
function Cat(name){
  this.name = name;
}

Cat.prototype = animal;   //equivalent to Cat.__proto__ = animal everytime new Cat is created

let myCat = new Cat("meow meow");
alert(`Do ${myCat.name} sleep? : ${myCat.sleeps}`);   //true



// default prototype: a property "constructor" that points back to the function itself

function Rabbit(){
  /*
   * ---default prototype---
   * Rabbit.prototype = {constructor: Rabbit};
   */
}

// validate the default Prototype
alert(`Rabbit.prototype.constructor == Rabbit ? : ${Rabbit.prototype.constructor == Rabbit}`);   //true

let rabbit = new Raddit();
let rabbit2 = new rabbit.constructor();   //using the same constrcutor as the existing one
