// immediate invoked function expression
// execute a function as soon as it's declared
// anonymous function
(function(){
  console.log('Hi, IIFE!')
}())

(function(){
  console.log('A cozy nest is ready')
}())



// create module using iife
// group related functionality into single module 
let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};

const funModule = (function(){
      return{
          isCuteMixin: isCuteMixin,
          singMixin: singMixin
      } // end of return stmt
})()
