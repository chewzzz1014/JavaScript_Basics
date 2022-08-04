"use strict"

// while, do...while, for
// for..in for loop over object properties
// for...of for looping over arrays and iterable objects

const names = ["John", "Jenny", "Sarah", "Justin"];

// while loop
let idx = 0;
while(idx<names.length){
  console.log(`Member ${idx+1}: ${names[idx]}`);
  idx++;
}

// do...while
let i = 5;
do{
  alert(i--);
} while(i); // while i is truthy

// for loop
for(let idx=0; idx<names.length;idx++)
  console.log(`Member ${idx+1}: ${names[idx]}`);

for(let name of names){
  console.log(`Member ${names.indexOf(name)+1}: ${name}`);
}

// using lable for nested loop
// in nested loop, 'continue' and 'break' only skip/exit the inner loop
outer : for (let i=0; i<3;i++){
  for (let j=0; j<3; j++){
    let input = prompt(`Value at location (${i}, ${j})?`);
    if(!input) break outer;  // exit from both inner and outer loop
  }
}

alert("Finished!");


// for ... in
let me = {
  name: "chewzzz",
  age: 20,
  isStudent: true,
};
for (let key in me)
  alert(`${key}: ${me[key]}`);


// for .. of
let grades = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-"];
for (let grade if grades)
  alert(`Grade: ${grade}`);
