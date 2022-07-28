// make customized properties of a function

function makeCounter(){

  function counter(){
    return counter.count++;
  };

  counter.count = 0;

  counter.set = n => count = n;
  counter.decrease = () => count--;
  counter.display = () => count;

  return counter;
}

let counter = makeCounter();
alert(counter());   //0
alert(counter());   //1

counter.set(5);
alert("Set count to 5...");
alert(counter.display());

counter.decrease();
alert("Decreasing count...");
alert(counter.display());



function sum(n){
  let currentSum = n;

  function f(m){
    currentSum += m;
    return f;
  };

  f.toString = () => currentSum;    //return the currentSum. Object to primitive conversion where hint is "string"

  return f;   //return in first execution only (first argument of sum())
}

alert(sum(1)(2)(3));
