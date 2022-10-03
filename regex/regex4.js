// . will match any one character
let str1 = "I'll hum a song";
let str2 = "Bear hug";
let huRegex = /hu./;
huRegex.test(str1);
huRegex.test(str2);

// match only any word in []
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);

// [a-e] will match any character from a to e
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);


// To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.

// For example, /[^aeiou]/gi matches all characters that are not a vowel

// matches all characters that are not a number or a vowel
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig;
let result = quoteSample.match(myRegex);


// + to match a character (or group of characters) that appears one or more times in a row.
// find matches when the letter s occurs one or more times
let difficultSpelling = "Mississippi";
let myRegex = /s+/ig;
let result = difficultSpelling.match(myRegex);
