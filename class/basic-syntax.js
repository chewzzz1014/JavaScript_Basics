"use strict"

class Person{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(val){
    [this.firstName, this.lastName] = val.split(" ");
  }

  printSmth(item){
    alert(item);
  }
}

let me = new Person("zi qing","chew");
me.printSmth(me.fullName);    // getter of full name
me.printSmth(me.firstName);
me.printSmth(me.lastName);
me.fullName = "chew zzz";   // setter of full name
me.printSmth(me.fullName);    // getter of full name

// in js, class is actually function, and the function code is the class's constructor. Class.prototype stores methods in the class.
alert(typeof Person);   // function

alert(Person === Person.prototype.constructor);   // true

alert(Person.prototype.printSmth);    // print the code inside the function printSmth

alert(Object.getOwnPropertyNames(Person.prototype));
// get the properties in Person.prototype. Include constrcutor and all methods in class Person

/*  Features of Class:
      - class is labelled by special internal property [[IsClassConstructor]]: true
      - Must be invoked using "new" keyword
      - Class methods are non-enumerable. Class's enumerable flag is false for all methods in prototype
      - Classes always use strict
*/

// just like function. classes can be defined using class expression
// class expression version of the class Person:

let doSmth = function(){};   // function expression

// class expression
let PersonExpression = class{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(val){
    [this.firstName, this.lastName] = val.split(" ");
  }

  printSmth(item){
    alert(item);
  }
};

alert(PersonExpression);    // output the contents of the class

// passing class expression (just like what we can do with function expression)
function makeClass(val){
  return class {
    sayHi(){alert(val);}
  };
}

let Person2 = makeClass("Wow!!");
new Person2().sayHi();    // "Wow!!"


// computed method names using brackets[...]

class User{
  ["say" + "Hi"](){
    alert("Hello!!!");
  }
}

new User().sayHi();   // "Hello!!!"

// class fields
class Game{
  name = "Candy Crush";   // the class fields are set on individual objects and not Game.prototype

  printName(){
    alert(`Do you enjoy playing ${this.name}?`);
  }
}

new Game().printName();   // Do you enjoy playing Candy Crush?
alert(Game.prototype.name);   // undefined


// making bound methods with class fields. "this" can be recognised outside the class
class Button{
  constructor(val){
    this.val = val;
  }
  click = () => {
    alert(this.val);
  }
}

let button = new Button('nice to meet you!');
setTimeout(button.click, 1000);``// nice to meet you

// convert functional object into class
class Clock{
  constructor({template}){
    this.template = template;
  }

  render(){
    let date = new Date();

     let hours = date.getHours();
     if (hours < 10) hours = '0' + hours;

     let mins = date.getMinutes();
     if (mins < 10) mins = '0' + mins;

     let secs = date.getSeconds();
     if (secs < 10) secs = '0' + secs;

     let output = template
       .replace('h', hours)
       .replace('m', mins)
       .replace('s', secs);

     console.log(output);
  }

  stop(){
    clearInterval(this.timer);
  }

  start(){
    this.render();
      this.timer = setInterval(()=>this.render(), 1000);    // method binding
  }
}

let clock = new Clock({template: 'h:m:s'});
clock.start();
