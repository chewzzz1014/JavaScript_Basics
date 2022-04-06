// global object in JS

globalThis.console.log("Halo");

// global functions and variable declared with var become property of global object

var gVar = 67;
function gFunc (){
  alert("In global function.");
}

globalThis.alert(globalThis.gVar);
globalThis.gFunc();


// can be used for polyfills

if (!window.Promise){
  alert("Old browser!");
}
else {
  alert("It will work!");
}
