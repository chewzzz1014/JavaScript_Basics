"use strict"

// setter and getter of data properties in an Object
let person = {
  firstName: "chew",
  lastName: "zzz",
  // getter of fullName
  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  },
  // setter of fullName
  set fullName(newName){
    [this.firstName, this.lastName] = newName.split(" ");
  }
};

alert(person.fullName);   // chew chewzzz
person.fullName = "John Smith";
alert(person.fullName);   //John Smith



// using setter and getter for compatibility
function User(name, birthday){
  this.name = name;
  this.birthday = birthday;

  Object.defineProperty(this, "age",{
    get(){
      let thisYear = new Date().getFullYear();
      return thisYear - this.birthday.getFullYear();
    }
  });
}

let me = new User("chewzzz", new Date(2002, 10, 14));
alert(`${me.name} is born on ${me.birthday} and she is ${me.age} years old this year.`);
