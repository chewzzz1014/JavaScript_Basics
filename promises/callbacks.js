"use strict"

// create a script tag and append to page
// script with the given src will start loading and run when ccompleted
function loadScript(src){
  let script = document.createElement("script");
  script.src = src;
  document.head.append(script);
}

// load and execute script at the given path
loadScript("/my/script.js");

// However, the code below the function call of loadScript() will run while the script hasn't finished loaded
// this means that we can't access variables or function declared in the scipt.
// to solve this, we use callback in the loadScript
function loadScript(src, callback){ // callback is the function we need to execute right after the script is loaded
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(script);

  document.head.appned(script);
}

loadScript("/my/script.js", function(){
   newFunction();   // call newFunction after the script is loaded ...
})


// nested callback
loadScript("/my/script1.js", function(script){
  alert("Script 1 loaded...");

  loadScript("/my/script2.js", function(script){
    alert("Script 2 loaded...");
  });
});


// exception handling for loadScript
function loadScript(src, callback){
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));   // calls this when the script failed to load

  document.head.append(script);
}

loadScript("/my/script.js", function(error, script){
  if (error)
      // handling error
    else
      // do something
});


// make nested callback+error handling easier to view
// loadScript function is same as what we've previously written
loadScript("1.js", step1);

function step1(error, script){
  if (error)
    handlingError(error);
  else {
    // do something ...
    loadScript("2.js", step2);
  }
}

function step2(error, script){
  if (error)
    handlingErro(error);
  else {
    // do something ...
    loadScript("3.js", step3);
  }
}

// and so on ...
