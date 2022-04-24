"use strict"
// every object have a property [[Prototype]] that is either null or points to a prototype object
// object will inherit from prototype object. If a property is not existed in an object, JS will check for its prototype object

let student = {
  studies: true,
  isTired: true,
};

let me = {
  name: "chewzzz",
  age: 20,
  /*
  or set the prototype here
  __proto__: student,
  */
};

// me.[[Prototype]] = human
// "human" is the prototype of "me"
me.__proto__ = student;

alert(me.name);   //chewzzz
alert(`Do I study? : ${me.studies}`);    // Do I eat? : true
alert(`Am I tired? : ${me.isTired}`); // Do I sleep? : true


// chained Prototype
// me->student->human

let human = {
  eats: true,
  sleeps: true,
};

student.__proto__ = human;

alert(`Do student sleep? : ${student.sleeps}`);   // Do student sleep? : true
alert(`Do I sleep? : ${me.sleeps}`);    // Do I sleep? : true

// overriding method
student.walk = function(){
  alert("Student is walking...");
};

me.walk = function(){
  alert("I'm walking...");
};

me.walk();    // I'm waking...


// for accessor properties where assignment is handled by setter, writing to such a property is the same as calling the function
// admin -> user
let user = {
  firstName: "John",
  lastName: "Green",
  set fullName(value){
    [this.firstName, this.lastName] = value.split(" ");
  },

  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  },
};

let admin = {
  __proto__: user,
  isAdmin: true,
};

alert(admin.fullName);    // getter in the prototype. "John Green"

admin.fullName = "chew zzz";   // setter of fullName

alert(`User fullname (in prototype): ${user.fullName}`);    //John Green
alert(`Admin username: ${admin.fullName}`);   //chewzzz


// this is not affect by prototype
user.isAuthorised = function (){
  if (this.authorised)
    alert("Authorised user. Welcome!");
  else
    alert("Something suspicious...");
};

user.authorising = function(){
  this.authorised = true;
};

admin.authorising();    // admin.authorised = true
admin.isAuthorised();   // "Authorised user. Welcome!"

user.isAuthorised();    // "Somethin suspicious..."
//user.authorised is undefined since we did not call user.authorising()

// Object.key(obj) return key (properties) in both object itself only, not inherited keys from Prototype
// for..in will iterate over keys (properties) in bpth object itself and Prototype
// filtering own properties in for...in using obj.hasOwnProperty(prop)

for (let prop in admin){
  if (admin.hasOwnProperty(prop))
    alert(`${prop} is belonged solely to object admin only.`);
  else
    alert(`${prop} is belonged to prototype of admin.`);
}
