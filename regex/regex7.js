// number of matches
// a{3, 5}: a appears between 3 and 5 times (both inclusive)
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // true
multipleA.test(A2); // false

// a{3, }: matching a at leat 3 times
// a{3}: match exact 3 times


// a?: a appear 0 or 1 times
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); // true
rainbowRegex.test(british); // true



// lookahead: pattern for JS to lookahead

// positive lookahead:  look to make sure the element in the search pattern is there, but won't actually match it. (?=...) where the ... is the required part that is not matched.
// negative lookahead: look to make sure the element in the search pattern is not there. (?!...) where the ... is the pattern that you do not want to be there

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex); // q
noquit.match(qRegex); // q

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // ooks for between 3 and 6 characters and at least one number
