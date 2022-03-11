"use strict"

//string literal can be wrapped in "",'', or ``
//some special access when wrapped in ''

//formatting of string
function sum(a,b){
  return a+b;
}

alert(`Sum is ${sum(3,4)}`);

//multiline output
alert(`Even Number between 1 to 10:
  2
  4
  6
  8
  10`);

/////////////////////////////////////////////////////////////
//use of "\"
//1: as escape character for '', "", \
//2: for \n (new line), \r\n (line break in windows), \t (tab) etc
//3: to represent unicode character

alert("\u0049"); //UTF-16. hex code with length of 4
alert("\u{1F60E}"); //UTF-32. hex code with length of 1-6


////////////////////////////////////////////////////////////

let str = "This is a string"

//length of string
alert(str.length);

//accessing each character in string
for (let idx in str){
  if (str[idx] !== " ")
      alert(`Index: ${idx}: ${str[idx]}`);
  else
    alert(`Index: ${idx}: Space`);
}


//some string's methods
alert(str.toUpperCase());
alert(str.toLowerCase());
alert(str.indexOf('a')); //first occurence of 'a' starting from index 0
alert(str.index('a',3)); //first occurence of 'a' starting from index 3
alert(str.lastIndex('a')); //last occurence of 'a'
alert(str.includes("is")); //true
alert(str.startsWith('A')); //false
alert(str.endsWith('a')); //false


////////////////////////////////////////////////////////////////

//bitwise NOT [ ~n === -(n+1)]
alert(~5) //-6

////////////////////////////////////////////////////////////

//substring
alert(str.slice(0,5)); //index 0 (inclusive) to 5 (exclusive)
alert(str.slice(2)); //index 2 (inclusive) to the end of string
alert(str.substring(5,10)) //index 5 (inclusive) to 10 (exclusive)
alert(str.str(0,5)) //substring of length 5 starting from index 0

alert(str.codePointAt(0)); //numeric code at index 0
alert(str.fromCodePoint(222)); //return character with given numeric code


/////////////////////////////////////////////////////////
