"use strict"

// grouping of characters

// check whether desired string groups are in the test string
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);

// matching Eleanor Roosevelt, Franklin Roosevelt with or without middle name
let myString = "Eleanor Roosevelt";
let myRegex = /^(Franklin|Eleanor).*Roosevelt$/i;


// capturing group: can be used for finding repeated substrings.
// enclosing regex pattern to be capture inside ()
//  substring matched by the group is saved to a temporary "variable", which can be accessed within the same regex using a backslash and the number of the capture group (e.g. \1). Capture groups are automatically numbered by the position of their opening parentheses (left to right), starting at 1.
let repeatedStr = "row row row your boat";
let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]

// catch same number that repeated thrice
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/;


// remove leading and trailing whitespaces
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/; // Change this line
let result = hello.replace(wsRegex, ''); // Change this line
console.log(result) //Hello, World!
