"use strict"

// access keys, values and entires ([key, value] pairs) of object just like map did
// unlike map with syntax map.keys, object has syntax Object.keys(obj)
// Object.keys/values/entries() return Array (but map return iterable)

let users = {
  name: "chewzzz",
  age: 20,
  isAdmin: false,
}

for (let [key, value] of Object.entries(users))
      console.log(`${key}: ${value}`);




//////////////////////////////////

// calculate the sum of salaries
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650

function sumSalaries(obj){
  return Object.values(obj).reduce(
    (sum, s) => sum += s
  ,0);
}

// calculate number of properties
let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2

function count(obj){
  return Object.keys(obj).length;
}
