"use strict"

// while, do...while, for, for...of

const names = ["John", "Jenny", "Sarah", "Justin"];

let idx = 0;
while(idx<names.length){
  console.log(`Member ${idx+1}: ${names[idx]}`);
  idx++;
}

for(let idx=0; idx<names.length;idx++)
  console.log(`Member ${idx+1}: ${names[idx]}`);

for(let name of names){
  console.log(`Member ${names.indexOf(name)+1}: ${name}`);
}
