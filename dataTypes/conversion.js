'use strict'

// string to number
let n = "11.54";
console.log(parseInt("2.3")); // 2 (Ignored any special chaaracter after digit)
console.log(parseInt("3"));
console.log(parseFloat(n));
console.log(parseInt("Hello"));    // NaN


// other data type to string
console.log(typeof true.toString());
console.log(typeof n.toString());
console.log(typeof (23.5).toString());
