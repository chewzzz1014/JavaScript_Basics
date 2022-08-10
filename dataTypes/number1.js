
let DNum = 225; //decimal
let BNum = 0b1111111; //binary
let ONum = 0o377; //octal
let HNum = 0xFF; //hexadecimal. or 0xFF

//convert decimal to other number base system
//all converted values are in string stype
// num.toString(base)
BNum = DNum.toString(2); //base 2
ONum = DNum.toString(8); //base 8
HNum = DNum.toString(16); //base 16


//operation on decimal number
let number1 = 34.3454;
alert(Math.round(number1)); //34.3
alert(Math.ceil(number1)); //35
alert(Math.floor(number1)); //34
alert(Math.trunc(number1)); //34 (remove decimal without rounding)

// toFixed always return string
alert(number1.toFixed(3)); //fixed to 3 decimal point. '34.345' 
123.toFixed(2); // ERROR!
123..toFixed(2);  // '123.00'
(123).toFixed(2); // '123.00'

//some method from Math class
alert(Math.random()); //generate random number. Range: 0<=n<1
alert(Math.pow(2,3)); //equivalent to 2**3 (2^3)
alert(Math.max(-3,40,22,4546)); //return maximum number among a list of arguments
alert(Math.random(-3,40,22,4546)); //return manimum number among a list of arguments


//comparing
//isNaN(value) converts value to number and determine whether it's NaN.
alert(isNaN(NaN)); //true
alert(isNaN("str")); //true. this string literal yields NaN

//isFinite(value) converts value to number and determine whether it's finite value. Always return true except for NaN, Infinity and -Infinity

alert(isFinite(Infinity)); //false
alert(isFinite("str")); //false. this string literal yields NaN


//parsing string to numeric (int/float)
alert(parseInt("12em")); //12
alert(parseInt("f12em")); //NaN

alert(parseFloat("12.23ee")); //12.23
alert(parseInt("12.3.4.5")); //12.3
