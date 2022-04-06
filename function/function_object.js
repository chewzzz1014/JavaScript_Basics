"use strict"

// function is object in JS that contains usable properties (just like any other objects)

// name property of function
function myFunc(){
  alert("Executing");
}
myFunc();
alert(`${myFunc.name} was executed.`);

// works with function expression too
let myFunc1 = function(){
  alert("Executing "+myFunc1.name+"...");
};
myFunc1();

// also works with function which is object properties
let person = {
  name: "chewzzz",
  age: 20,
  greet(){
    alert("Hi "+person.name+", nice to meet you!");
  },
  bidFarewell: function(){
    alert("Byeeeeee");
  },
};
alert(person.greet.name);
alert(person.bidFarewell.name);



// length property: return number of parameters
function findMax(a, b, c){
  return Math.max(a, b, c);
}
alert(`Max of 3 number is ${findMax(2, 4, 6)}`);
alert(findMax.length);    //3

// length property doesn't cunted on function with rest parameters. Will get 0 in every case
function findSum_restParams(...args){
  return args.reduce((accumulator, item)=> accumulator+=item, 0);
}
alert(findSum_restParams(3443,23,5,-233,121) );
alert(findSum_restParams.length);   //0


function ask(question, ...handlers){
  let isYes = confirm(question);    // true when user pressed yes or otherwise

  for (let handler of handlers){
    if (handler.length===0)
    {  if (isYes)
        handler();  }  // handler is no-args function and user pressed yes
    else
      handler(isYes);   //execute whether user pressed yes or cancel: display the choice
  }

}
ask("Question?", ()=> alert("You said yes"), result=>alert(result));

// customize properties of function
function countIt(q){
  confirm(q)? countIt.isTrue++ : countIt.isFalse++;
  countIt.counter++;
  if (Math.abs(countIt.isTrue-countIt.isFalse)>=3)
    countIt.toCont = false;   //stop asking question once got 3 true or 3 false answers
}

//initialize customized function properties
countIt.counter = 0;
countIt.isFalse = 0;
countIt.isTrue = 0;
countIt.toCont = true;

let questions = ["Are you full?","Would you like to have dinner?", "12>3?", "Learning JavaScript?", "Are you happy today?", "Are you a student?"];

questions.forEach((item)=>{if (countIt.toCont) countIt(item); } );

alert(`We've asked ${countIt.counter} out of ${questions.length}, and we got ${countIt.isTrue} questions' answer are true while ${countIt.isFalse} are false.`);


// named function expression
let person = function func (someone){
  if (someone)
    alert(`Welcome, ${someone}!`);
  else
    func("It's me");   //when not given some else's name, then it's me
}

person();   //someone is not defined. Proceed with internal call of func("It's me")

func();   //Error! We can't access function through "func"

/*
  * Why not just:
  * let person = function(someone){
  *     if (someone)
  *         alert(`Hello, ${someone}!`);
  *     else
  *         person("it's me");
  *  }
  *
  * It's because "person" might be changed outside of function
  * e.g., let welcome = person;
  *       person = null;
  *       person();   //ERROR!
  * In this case, "person" no more usable
*/

// if we use NFE
let welcome = person;   // "clone" code in function "person"
person = null;
welcome();    //still works
