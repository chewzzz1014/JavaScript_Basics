// ^ inside [] indicates negated character set in the form [^thingsThatWillNotBeMatched]

// outside [], ^ indicates the beginning of string
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;  console.log(calRegex.test(rickyAndCal));  // true


// $ indicates end of bgRegex
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);


// \w: matching [A-Za-z0-9_]
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // true
shortHand.test(numbers); //  true
longHand.test(varNames); // true
shortHand.test(varNames); // true


// \W: Compliment of \w
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); // %
sentence.match(shortHand); // %


// \d: Matching [0-9]
// \D: Complement of \d ([^0-9])



// \s matching [ \r\t\f\n\v]
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex); // [" ", " "]


// \S is compliment of \s
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length; // 32
