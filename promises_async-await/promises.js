"use strict"

// syntax:
/*
          let promise = new Promise (function(resolve, reject){
                      //executor here...
          });
   - resolve and reject are JS callbacks
   - if the executor is run successfully
   resolve(value) is called. Else, if error occured, calls reject(error)
})
*/

let promise = new Promise (function(resolve, reject){
  setTimeout( () => resolve("done"), 1000); // executor
  // executor is called automatically when the Promise object is created
  // resolve is called. State is changed to "fulfilled" and Result is changed to "done" (values that passed to callbacks Resolve)
});

let promise = new Promise(function(resolve, reject){
  reject(new Error("Unindentified :("));
});


// then : executes function "error" or "result" based on the state of promise
promise.then(
  result => alert(result),  // print value that have been passed to "resolve" callbacks }
  error => alert(error)  // print error that have been passed to "reject" callbacks }
);

// catch : only concerned with catching error
// .catch(f) is equivalent to .then(null, f)


// catch is always called no matter it's resolved and rejected
new Promise((resolve, reject) = > {
  // executor here ...
})

.finally( ()=>    // execute this no matter it's resolved or rejected
)

.then( result => //do something
        error => //do something
      );


////////////////////////////////////////////////////

function loadScript(src){
  return new Promise(function(resolve, reject){
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);
    script.oneerror = () => reject(new Error(`Script load error for ${src}`));

    document.head.append(script);
  });
}

let promise = new Promise("path/script.js");

promise.then{
  script => alert(`${script.src} is loaded!`),
  error => alert(`Error: ${error.message}`)
};

promise.then(script => alert("Another handler..."));
