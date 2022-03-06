"use strict"
a ?? b
//is equivalent to
(a!== null && a!==undefined)? a:b

let userName = prompt("Enter user name:");
alert("Welcome, "+ (userName ?? "Anonymous" )+"!");
