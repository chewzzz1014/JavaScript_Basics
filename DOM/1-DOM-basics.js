" use strict"

/*
  -host environment for js: browser/web-server/host
  -host environment provides own objects and function :
          1. Web browser: control web pages
          2. Node.jd provides server-side features.
  - 'Root' object called `window`
      - Global object for JS code
      - Represents the browser windor and provides methods to control it
*/


function sayHi(){
  alert("Hi!!");
}

// global functions are methods of global object
window.sayHi();

alert(window.innerHeight);  // inner window height


// DOM - Document Object Model
// represents all page content as objects that can be modified

document.body.style.background = "red";
setTimeout(()=> document.body.style.background = "", 1000);



/*
  - CSSOM : CSS Object Model
  - BOM : Browser Object Model. Working with objects except document (eg, alert, confirm and prompt)
*/
