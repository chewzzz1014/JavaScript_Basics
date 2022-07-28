"use strict"

// special numerical values: Infinity, -Infinity, NaN



// division by zero get Infinity
console.log( 1 / 0);  // Infinity


// NaN: not a number
// computational error (incorrect/undefined mathematical operation)
console.log( "abc" / 2);  // NaN
console.log( NaN / 4);  //NaN


// BigInt: for values > (2^53-1)
// append n to the end of integer
const bigInt = 1234676543234567898765432234567876543234567n;
