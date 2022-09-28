// return true if "Code" is in the string
let str = "freeCodeCamp"
let campRegex = /Code/;
console.log(campRegex.test(str));


// more than one pattern
let moreRegex = /chewzzz|Chewzzz|CHEWZZZ/;
console.log(moreRegex.test("Chewzzz")); //true

// flag i to ignore case
let ignoreCaseRegex = /chewzzz/i;
console.log(ignoreCaseRegex.test("ChEwZzZ"));


// extract the match
console.log("Hello, World!".match(/Hello/));  // Hello
console.log("Regular expressions".match(/expressions/));


// flag g extract the matched words more than 1
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
console.log(testStr.match(ourRegex));   // ["Repeat", "Repeat", "Repeat"]
