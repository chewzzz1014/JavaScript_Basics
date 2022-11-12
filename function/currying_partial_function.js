// The arity of a function is the number of arguments it requires.
// Currying a function means to convert a function of N arity into N functions of arity 1.
// In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.

function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

const curried = x => y => x + y

const funcForY = curried(1);
console.log(funcForY(2)); // 3



//  partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments
function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13


// example 2
function add(x) {
  return function(y){
    return function(z){
      return x + y + z;
    }
  }
}

add(10)(20)(30);
