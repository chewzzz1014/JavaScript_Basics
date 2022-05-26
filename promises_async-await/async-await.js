"use strict"

// adding 'async' in front of function header indicates that the function always return Promise

async function f(){
  return 1; // this is automatically wrapped in a resolved promise
}
f().then(alert);  // 1

// is same as this below function
async function f(){
  return Promise.resolve(5);  // explicitly return a resolved promise
}
f().then(alert);  // 5

// await : only work inside "async" function
// suspends the function execution until the promise settles and resumes it with the promise result
async function f(){
  let promise = new Promise( (resolve, reject) => {
    setTimeout( ()=> resolve("done!"), 1000)
  });

  let result = await promise; // "result" will get the value of promise result
  alert(result);    // done!
}
f();


// awaits accepts thenable
// await allows a non-promise third-party object, but it must be promise-compatible
class Thenable {
  constructor(num){
    this.num = num;
  }

  then(resolve, reject){
    alert(resolve);  // *
    // after 1 seconds, resolve with this.num*2
    setTimeout( ()=> resolve(this.num * 2), 1000);  //**
  }
}

async function f(){
  // wait for 1 seconds (for the promise resolve), the result become 2
  let result = await new Thenable(1);
  alert(result);
}
f();  // Order of execution:  * -> ** (refer thier respective line)


// error handling in async function (when the promise rejected and return error)

// try...catch block in async function
async function f(){
  try{
    let response = await fetch("https://wrong-link");
  } catch(err){
      alert(err);
  }
}
f();

// or append .catch handler to the function call
async function f(){
  let response = await fetch("https://wrong-link");
}
f().catch(alert);


// async/await works for Promise.all
let results = await Promise.all([
  fetch(url);
  fetch(url1);
  ...
]);
