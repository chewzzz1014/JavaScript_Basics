"use strict"

// iterable: any object usable in 'for...of' loop (eg, string and array)

// Symbol.iterator make an object into iterable
// Symbol.iterator is a special built-in symbol that return an object (iterator)

/*
  How for...of loop works:
  1. When for..of loop starts, it call a method (added under Symbol.iterator) and then return an iterator, an object with method 'next'.
  2. When for...of wants to next value, it calls next() on the object.
  3. next() consists of {done: Boolean, value: any}. done indicate the state of loop and value is the next value returned.
*/

let range = {
  start: 1,
  end: 5,
};

range[Symbol.iterator] = function(){
    return {
        current: this.start,
        last: this.end,

        next(){
          if (this.current<=this.last)
              return {done: false, value: this.current++};
          else
              return {done: true};
        }
    };
};

// now object 'range' is an iterable
for (let n of range)
    console.log(`In ${n}`);


// calling an iterator explicitly that will create a string iterator and gets value from it
// string is an iterable
let str = "iterable";

let iterator = str[Symbol.iterator]();

while(true){
    // get the object {done: Boolean, value: ...}
    let result = iterator.next();
    // get the value of "done" property
    if (result.done)
        break;
    console.log(`Current value: ${result.value}`);
}


// Array.from(obj[, mapFn, thisArg])
// mapFn: Mapping function applied to each element before converted to array
// thisArg: Set 'this' for it
// take an iterable/array-like value and makes it into real array
let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2,
};
let arr = Array.from(arrayLike);
// now an array. Can use array method
arr = arr.map((ele)=> ele+" (Checked)");
for (let n of arr)
    console.log(n); // Hello (Checked), World (Checked)
