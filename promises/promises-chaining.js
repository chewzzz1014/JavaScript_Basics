"use strict"

// promises chaining
new Promise( function (resolve, reject){
    setTimeout( ()=> resolve(0), 2000);
}).then(function (result){
    alert(`Value = ${result}`);   // Value = 0
    return result += 1;
}).then(function(result){
  alert(`Value = ${result}`);   // Value = 1
  return result += 2;
}).then(function(result){
  alert(`Value = ${result}`);   // Value = 3
  return result += 3;
});


// below is not promises chaining
// value of resolve is passed to every handlers and processes independently
let promise = new Promise(function(resolve, reject){
  setTimeout( ()=>resolve(1), 2000);
});

promise.then( function(val){
  // ...
});

promise.then( function(val){
  // ...
});

promise.then (function(val){
  // ...
});


// handlers can return promises too
// 1 seconds interval between each output
new Promise(function(resolve, reject){
  setTimeout( ()=> resolve(1), 1000);

}).then(function (val){

  alert(val);   // 1

  return new Promise( (resolve, reject) => {
    setTimeout( ()=> resolve(val*2), 1000);
  });

}).then(function(val){

  alert(val);   // 2

  return new Promise( (resolve, reject) => {
    setTimeout( ()=>resolve(val*2), 1000);
  });

}).then(function(val){
  alert(val);   // 4
});


// Thenables : an arbitary object that has a method
// thenables will be treated the same way as promise
class Thenable{
  constructor(num){
    this.num = num;
  }

  then(resolve, reject){
    alert(resolve);   // code of resolve
    setTimeout( ()=> resolve(this.num * 2), 1000);
  }

}

new Promise(resolve => resolve(1))
    .then(result => { return new Thenable(result);
    })
      .then(alert);   // 2 (after 1 seconds)
