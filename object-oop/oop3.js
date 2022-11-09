"use strict"

//constructor of object

// common agreement: constructor function name should be capitalized
function Person(name, age){
  this.name = name;
  this.age = age;
  this.bornYear = 2022-this.age;
  this.greet = function(){
     alert("Hi "+this.name+", nice to meet you!"); };
  this.printAge = function(){
    alert("You're "+this.age+" years old.");
  };
  this.printYear = function(){
    alert("You born on "+ this.bornYear);
  }

  //perform these 3 tasks whenever new object was created
  this.greet();
  this.printAge();
  this.printYear();
}

//let name = prompt("Enter name:");
//let age = prompt("Enter age:");
let user = new Person(prompt("Enter name:"), prompt("Enter age:"));



//////////////////////////////////////////////////////////////////////////////

//constructor for Calculator

function Calculator(){
  this.read = function(){
    this.a = +prompt("Enter value 1"); //make sure it's number
    this.b = +prompt("Enter value 2");
  }

  this.sum = function(){
    alert("Their sum is "+ (this.a + this.b));
  }

  this.mul = function(){
    alert("Their result of multiplication is "+ (this.a * this.b));
  }
}

let calculator = new Calculator();
calculator.read();
calculator.sum();
calculator.mul();


/////////////////////////////////////////////////////////////////
//calculate the sum of all values entered by user (stored in variable value). Able to acces the initial value

function Accumulator(num){
  this.startingValue = num;
  this.value = num;
  this.count = 1;

  this.read = function(){
    let number = +prompt("Enter number");
    this.value += number;
    this.count++;
  };

  this.printInitial = function(){
    alert("We start with "+this.startingValue+"!");
  };

  this.printSum = function(){
    alert("Total values of "+this.count+" entered is "+this.value);
  };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
accumulator.read();
accumulator.read();
accumulator.read();
accumulator.printInitial();
accumulator.printSum();
