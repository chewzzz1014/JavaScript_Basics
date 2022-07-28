"use strict"

// losing "this" in setTimeout
let user = {
  firstName: "alex",
  greet(){
    alert(`Hi, ${this.firstName}!`);
  }
};

setTimeout(user.greet, 1000);   // Hi. undefined!


// solution 1: use wrapper
setTimeout(function(){
  user.greet();
}, 1000);   //Hi, alex!
// works. setTimeout receives "user" from the outer lexical environment and it calls the method normally

// or use arrow function
setTimeout(()=>user.greet(), 1000);


// solution 2: using bind
// syntax: let boundFunc = myFunc.bind(context)
// "myFunc" will be binded to "context", where "this" in "myFunc" became "context"
let boundGreet = user.greet.bind(user);
setTimeout(boundGreet, 1000);   //Hi, alex!
boundGreet();   //Hi, alex!


// mass binding many methods in an object
user.bye = function(){
  alert( `Bye, ${this.firstName}`);
};

user.wow = function(){
  alert( `Wow, ${this.firstName}.`);
};

user.congrats = function(phrases){
  alert(`${this.firstName}, congrats on ${phrases}!`);
};

let bindCongrats = user.congrats.bind(user);
bindCongrats("getting first place");

for (key in user){
  if (typeof user[key] == "function")
    user[key] = user[key].bind(user);
}

let bindWow = user.wow.bind(user);
bindWow();    //Wow, alex.


// binding with argument (partial function application)
user.score = 0;
user.addScore = function(a){
  this.score += a;
};
user.displayScore = function(){
  alert(`${this.firstName}, your score is ${this.score}!`);
};

let boundDisplayScore = user.displayScore.bind(user);
let boundAdd2Score = user.addScore.bind(user, 2);   // passing argument to add 2 to user.score
let boundAdd1Score = user.addScore.bind(user, 1);   // passing argument to add 1 to user.score
boundAdd2Score();
boundAdd2Score();
boundAdd2Score();
boundAdd1Score();
boundDisplayScore();    //alex, your score is 7!

// partial function without context
// create a function that do this instead of using methid bind()
function partial(func, ...argsBound){
  return function(...args){
    return func.call(this, ...argsBound, ...args);
  }
}

user.say = function(time, phrase){
  alert(`[${time}] ${this.firstName}: ${phrase}`);
}

user.sayNow = partial(user.say, new Date().getHours()+":"+new Date().getMinutes());

user.sayNow("First Comment");
// [11:22] alex: First Comment
