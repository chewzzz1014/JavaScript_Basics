// ^ inside [] indicates negated character set in the form [^thingsThatWillNotBeMatched]

// outside [], ^ indicates the beginning of string
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;  console.log(calRegex.test(rickyAndCal));  // true


// $ indicates end of bgRegex
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
let result = lastRegex.test(caboose);
