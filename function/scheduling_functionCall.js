// setTimeout: delay function call for a given time

function introduceMyself(name, age){
  alert(`My name is ${name} and I'm ${age} years old.`);
}

timer = setTimeout(introduceMyself, 2000, "chewzzz", 20);   //delay is 2000 milliseconds (2 seconds)
// do not put () behind function name! Function will execute and the result of excution will be returned to the setTimeout(). Nothing to schedule.

clearTimeout(timer);    //cancel timeout

timer = setTimeout(introduceMyself, 2000, "chewzzz", 20);   //nothing here since timeout has been cleared


//  setInterval: repeatedly execute function in the given interval

let timerRepeat = setInterval( ()=>alert("2 second has passed."), 2000);    //repeat for every 2000 milliseconds (2 seconds)
setTimeout( ()=>{clearInterval(timerRepeat); alert("Times's out"); }, 10000 );    //stop everything after 10 seconds.


// nested setTimeout to schedule multiple calls
let nestedTimers = setTimeout(function tick(){
  alert("Tick");
  nestedTimers = setTimeout(tick, 2000);
}, 2000);
// equivalent to setInterval

//set delay time flexiblely using nested setTimeout
let waitingTime = 2000;
let answer, passed=0;

let waiting = setTimeout(function f(){
  alert(`Waiting...${passed/1000} seconds passed...`);
  answer = confirm("Have you decided?");
  if (!answer){
    waitingTime *= 2;
    passed += waitingTime;
    waiting = setTimeout(f, waitingTime);
  }
  else
    {
      alert("Glad to know that :) Bye.");
      clearTimeout(f);
    }
}, passed);
