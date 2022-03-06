"use strict"

//falsy is always false
falsy = [0, "", null, undefined, NaN];


falsy.forEach( function(value){ (value) ? console.log("It's truthy!") : console.log("It's falsy!");} );




let grade = prompt("Enter GPA:",0);

let classScored = ( grade<=4.0 && grade>=3.6)? "First":
            ( grade<=3.5 && grade>=3.0)? "Second Class Upper":
            ( grade<=2.9 && grade>=2.5)? "Second Class Lower":
            ( grade<=2.4 && grade>=2.0)? "Third":
            ( grade<=1.9 && grade>=1.0)? "Pass": "Fail";

alert(`You got ${classScored}`);


let role = prompt("What is your role?")
alert( (role==="User")? "Welcome!" : (role=="Developer")? "This is written in JavaScript!": "We don't know who you are :(")
