"use strict"

function askPassword()
    {
        let password = prompt("Password:");
        if(password)
        { (password=="TheMaster")? alert("Welcome!"): alert("Wrong Password!"); }
        else
        { alert("Canceled"); }
    }


let role = prompt("Who's there?");
if (role)
{ (role!=="Admin")? alert("I don't know you"): askPassword(); }

else {
  alert("Canceled"); //pressed cancel will get null thus role is false
}
