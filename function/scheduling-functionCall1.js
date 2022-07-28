"use strict"

// zero delay setTimeout. But it will only be invoked after the current script
setTimeout(function(){alert("World.");});
alert("Hello");

// to show that zero delay setTimeout is actually not zero delay
let start = Date.now();
let times = [];

setTimeout(function run(){
  times.push(Date.now()-start);   // appending delay from the last call into the array times

  // show the delay after 100 ms has passed (since the start)
  if (start+100<Date.now())
    alert(times);   //
  else {
    setTimeout(run);    // re-schedule again
  }
});   // delay is 0ms by default


// write a function that prints a number in the given range every second
// using setInterval
function printNumbers(from, to){
  let repeat = setInterval(function(){
    alert(from);
    if (from<to)
      setInterval(repeat);
    else
      clearInterval(repeat);
    from++;
  },1000);
}

printNumbers(1,3);

// using nested setTimeout
function printNumbers(from, to){
  setTimeout(function repeat(){
    alert(from);
    if (from<to)
      setTimeout(repeat, 1000);
    from++;
  },1000);
}

printNumbers(1,10);
