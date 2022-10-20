"use strict"

// grouping of characters

// check whether desired string groups are in the test string
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);

// matching Eleanor Roosevelt, Franklin Roosevelt with or without middle name
let myString = "Eleanor Roosevelt";
let myRegex = /^(Franklin|Eleanor).*Roosevelt$/i;
