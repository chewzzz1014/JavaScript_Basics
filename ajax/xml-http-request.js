"use strict"

// old way of sending request
const req = new XMLHttpRequest();

req.onload = function(){
  console.log("ALL DONE WITH REQUEST");
  const body = JSON.parse(this.responseText);
  console.log(body.ticker.price);
}

req.onerror = function(){
  console.log("Error");
  console.log(this);
}

let url = "https://icanhazdadjoke.com/j/200"
req.open("GET", url);
req.send();
