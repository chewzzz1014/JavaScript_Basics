"use strict"

// promises is a cleaner version of callback

function promiseTimeout(ms){
  // promise object
  // accapt a callback (function: resolve/reject)
  // call resolve when operation succeeds
  // call reject when operation fails
  return new Promise((resolve, reject) => {setTimeout(resolve, ms);});  // setTimeout call resolve after ms milliseconds
}

promiseTimeout(2000)
  // execute "then" if resolve is called
  .then(()=>{
    console.log("done");
    return Promise.resolve(42); // shortcut for successful Promise
  })
  // execute "then" if resolve is called
  // "response" is the argument of "resolve" in previous "resolve" execution
  .then((response)=>{
    console.log(response);
  })
  // reject is thrown
  .catch(()=>{
    console.log("cool error handling");
  });
