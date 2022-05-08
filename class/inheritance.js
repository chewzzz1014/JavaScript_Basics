"use strict"

class Animal{
  constructor(name){
    this.speed = 0;
    this.name = name;
  }
  run(speed){
    this.speed = speed;
    alert(`${this.name} is running at ${this.speed} km/h!`);
  }
  stop(){
    this.speed = 0;
    alert(`${this.name} stays stationary.`);
  }
}

class Rabbit extends Animal{    // Rabbit inherits Animal and the object of Rabbit can access methods in both Rabbit and Animal. Rabbit.prototype.[[Prototype]] == Animal.prototype
  hide(){
    alert(`${this.name} hides!`);
  }
}

let myRabbit = new Rabbit ("Alice");
myRabbit.run(50);
myRabbit.stop();
myRabbit.hide();

// any expression is allowed after "extends" in class syntax
function f(phrase){
  return class{
    sayHi(){ alert(phrase); }
  }
}

// class syntax
class User extends f("Wow!!");
new User().sayHi();   // Wow!!


// calling parent's method using "super.method()" and calling parent's constructor using "super()"
// modifying and rewrite class Rabbit we've declared previously
class Rabbit extends Animal{
  // Animal's constructor will be called automatically. If we need some added functionality, we can declare Rabbit constructor too
  constructor(name, earLength){
    super(name);    // MUST CALL super() before using "this"
    this.earLength = earLength;
  }
  hide(){
    alert(`${this.name} hides!`);
  }
  stop(){   // overriding method
    super.stop();   // calling parent's method
    this.hide();    // itself's method
  }
}

let yourRabbit = new Rabbit("Alex");
yourRabbit.hide();
yourRabbit.run(50);
yourRabbit.stop();
