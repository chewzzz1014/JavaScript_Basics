"use strict"

// generators can return nultiple values
// syntax:

function* generateSequence(){
  yield 1;  // one's next() stopped here
  yield 2;
  return 3;
}

// next() is the main method of a generator
// when it met "yield <value>", it will pauses and return the value
// next() will result in an object with 2 properties, values(the yielded value) and done(true/false)

let generator = generateSequence(); // generator object created from generator function

alert(generator); // [object Generator]

// get the yielded values one by one
let one = generator.next();
alert(JSON.stringify(one));
// {value: 1, done: false}

let two = generator.next();
alert(JSON.stringify(two));
// {value: 2, done: false}

let three = generator.next();
alert(JSON.stringify(three));
// {value: 3, done: true}

let four = generator.next();
alert(JSON.stringify(four));  // {done: true}

// generators are iterable
for (let val of generator){
  alert(val); // 1, 2
} // ignored the last values when the done:true


// generator composition : embed generator in another generator
// example: create a sequence that contains 0-9, A-Z and a-z
function* generateSeq(start, end){
  for (let i = start; i<=end; i++)
    yield i;
}

function* generateCodes(){
  // 0 to 9
  yield* generateSeq(48, 57);

  // A to Z
  yield* generateSeq(65,90);

  // a to z
  yield* generateSeq(97,122);
  }

  let str = "";
  for (let code of generateCodes()){
    str += String.fromCharCode(code);
  }

  alert(str); // 0...9A...Za...z

  // "yield" can return result to the outside, as well as pass the value inside the generator
  function* gen(){
    let result = yield "2 + 2 = ?";
    alert(result);
  }

  let generator = gen();
  let question = generator.next().value;
  generator.next(4);


  // more calls
  function* gen(){
    let ask1 = yield "2 + 2 = ?";
    alert(ask1);

    let ask2 = yield "3 * 3 = ?";
    alert(ask2);
  }

  let generator = gen();
  alert(generator.next().value);  // "2 + 2 = ?"
  alert(generator.next(4).value); // "3 * 3 = ?"
  alert(generator.next(9).done); // true 
