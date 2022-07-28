"use strict"
a ?? b
//is equivalent to
(a!== null && a!==undefined)? a:b

// if userName is not provided, then it's "Anonymous"
let userName = prompt("Enter user name:");
alert("Welcome, "+ (userName ?? "Anonymous" )+"!");


// for assigning default value if the variable is null/undefined
let height = +prompt("Enter height",null);
let width = +prompt("Enter width", null);
let area = (height ?? 100) * (width ?? 50);
alert(area);
