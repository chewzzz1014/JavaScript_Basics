"use strict"

// create a wrapper function for caching of  slow and CPU-intensive function

function slow(x){
  // some heavy and slow CPU-intensive job here
  alert(`Called with ${x}`);
  return x;
}

function cachingDecorator(func){
  let cache = new Map();

  return function (x){
    if (cache.has(x))
        return cache.get(x);

    // execute the below code if there's no such key in cache
    let result = func(x);
    cache.set(x, result);
    return result;
  };
}

slow = cachingDecorator(slow);
alert( slow(1) );   // cached and the result is returned
alert("Again: "+slow(1));   //slow(1) result is returned from cached

alert(slow(2));
alert("Again: "+slow(2));   // slow(2) result is returned from cache

// calling slow from an object
let worker = {
  doSmth(){
    return 2;
  },

  slow(x){
    alert(`Called with ${x}`);
    return x*this.doSmth();   //how do we use slow() outside onject, where "this" is undefined ?
  }
};

// use func.call(obj, arg1, arg2...)
slow = cachingDecorator(slow);
alert(slow.call(worker, 2));


// another examples of func.call
let me = {name: "chewzzz"};
let you = {name:"Anonymous"};
function sayHi(){
  alert("Hi, "+this.name+"!");
}
sayHi.call(me);   // Hi, chewzzz!
sayHi.call(you);  // Hi, anonymous!
