"use strict"


// promise handlers (then, catch, finally) are asynchronous
// promise is resolved -> execute code below handler -> execute handler

let promise = Promise.resolve();  // 1
promise.then( ()=> alert("Promise Done!")); // 3
alert("Code Finished!");  // 2


// to make sure that they're in order we desired, put thme on chained .then call
Promise.resolve()   // 1
    .then( ()=> alert("Promise Done!"))   // 2
    .then( ()=> alert("Code Finished!"));   // 3
