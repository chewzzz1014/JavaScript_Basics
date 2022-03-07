"use strict"

//arrow function that accepts no argument
let ask = ()=>confirm("Do you agree with Terms and Conditions?")
ask()


//arrow function that accepts 1 argument
let name = prompt("Enter name:");
name = name || "anonymous" ; //"anonymous" if name is falsy (null/undefined/"")
let printGreeting = name => alert(`Welcome, ${name}!`);
printGreeting(name)

//arrow function that accepts 2 arguments
let age = (born, current=2022) => current-born;
let born = prompt("Enter Age:");
born = born || "NaN" ; //NaN if bron is falsy (null/user entered cancel)
alert("You're "+age(born)+" years old.")

//arrow function with more than one line of statements, mandatory to include return statement
function askUser(question, yes, no){
  (confirm(question))? yes(): no();
};

askUser(
  "Do you agree?",
  ()=> {alert("You agreed.")},
  ()=> {alert("You disagreed.")}
);
