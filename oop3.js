"use strict"

//constructor of object

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

  this.greet(); //perform these 3 tasks whenever new object was created
  this.printAge();
  this.printYear();
}

//let name = prompt("Enter name:");
//let age = prompt("Enter age:");
let user = new Person(prompt("Enter name:"), prompt("Enter age:"));
