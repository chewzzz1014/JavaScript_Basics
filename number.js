//leading 0 and trailing 0 in decimal value is allowed
var a = .89;
var b = 98.;

console.log(`a/b: ${a/b}`)
console.log(1/0) //Infinity
console.log("Wow"/2) //NaN
console.log( NaN *3) //NaN

//operation on number
console.log(b.toFixed(4)); //98.0000
console.log(b.toPrecision(4)); //98.00



console.log(0.42.toFixed(4)); //valid
console.log(42..toFixed(4)); //valid
console.log((42).toFixed(4)); //valid
console.log(42.toFixed(4)); //invalid
