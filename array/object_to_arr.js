//convert obect to array

let person = {
  name: 'chewzzz',
  age: 20,
  family: {
    member: 6,
    origin: "malaysia",
  },
}

//get key of object
let keysArr = Object.keys(person);
keysArr.forEach( (item)=> alert(item));
//get values of Object
let valuesArr = Object.values(person);
valuesArr.forEach( (item)=> alert(item));



//summing values in Object

function sumSalaries(obj){
  return Object.values(obj).reduce( function(sum, item){
    return sum + item;
  }, 0);
}
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650



//count number of properties in Object

function count (obj){
  return Object.keys(obj).length;
}
let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
