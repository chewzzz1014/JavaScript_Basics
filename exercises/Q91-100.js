// Q91: Diff between native object, host object, user object
// native: objects that're part of ECMAScript specification. Eg, string, math, regexp
// host: objects provided by browser/runtime environment (Node). Eg, window, XmlHttpRequest, DOM nodes
// user: objects defined in JS code


// Q92: Tools/Technique used for debugging JS Code
// chrome devtools, debugger stmt, console.log


// Q93: Promises compare to callback
// pros:
/**
 * 1. avoid callback hell
 * 2. write sequential async code with .then()
 * 3. write parallel async code with Promise.all()
 * 4. solve common callback problems: calling callback too late, early, many times, swallow errors
 */

// cons
// 1. complex
// 2. need to load polyfill if ES6 is not supported


// Q94: attribute vs property
// attribute: defined on HTML markup. Eg, property type and value
<input type='text' value='name'></input>

// property: defined on DOM
const input = document.querySelector('input')
const prop = input.getAttribute('value')


// Q95: Same-origin policy
// origin: combination of URI scheme, hostname, port number
// prevents JS from making requests across domain boundaries
// prevents malicious script on one page from obtaining access to sensitive data on another web page using DOM

// Q96: Purpose of void 0


// Q97: is JS a compiled/interpreted language
// interpreted language
// interpreter reads JS code, interprets line by line and run it