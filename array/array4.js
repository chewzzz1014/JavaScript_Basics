//contains some examples of uses of array methods


//camelize string with dash-separated words

function camelize(str){
  let arr = str.split("-");
  arr =  arr.map( (item,index) => (index>0)? item[0].toUpperCase()+item.slice(1): item );
  return arr.join("");
}

camelize("background-color"); //backgroundColor

/////////////////////////////////////////////////////////////////////////////////
//get elements in certain range
function filterRange(arr, a, b){
  let filtered = arr.filter(item=> (item>=a && item<=b) );
  return filtered;
}
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)


//alternative 2 (filter in place)
function filterRangeInPlace(arr,a,b){
  arr.forEach(function(item, index){
    if (item<a || item>b) arr.splice(index,1);
  });
}
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]

//////////////////////////////////////////////////////////////////////////
//sort array in decreasing order
let arr = [5, 2, 1, -10, 8];

arr.sort((a,b)=> b-a);
alert( arr ); // 8, 5, 2, 1, -10


///////////////////////////////////////////////////////////////////////////
//sort array w/o changing original Array
function copySorted(arr){
  let arr2 = arr.slice(0);
  arr2.sort();
  return arr2;
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)

//////////////////////////////////////////////////////////////////////////
//calculator
function Calculator(){

  this.methods= { //object to store formulae
    "+": (a,b) => (a+b),
    "-": (a,b) => (a-b),
  };

  this.calculate = function(input){

    let arr = input.split(" ");
    let a= +arr[0];
    let b= +arr[2];

    return this.methods[arr[1]](a,b);
  };

  this.addMethod = function(operator,formula){
    this.methods[operator] = formula;
  };

}

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
/////////////////////////////////////////////////////////////////////////////

//map to name
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names ); // John, Pete, Mary

/////////////////////////////////////////////////////////////////////////////

//map to objects
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map( item => ({ fullName: `${item.name} ${item.id}`, id: item.id}) );

/* becomes
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith

////////////////////////////////////////////////////////////////////////////////

//sort users by age

function sortByAge(arr){
  arr.sort((a,b)=> a.age - b.age);
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete


/////////////////////////////////////////////////////////////////////////////////////////////

//shuffle Array
function shuffle (arr){
  arr.sort(Math.random()-0.5);  //might generate +ve or -ve number
}

let arr = [1, 2, 3];
shuffle(arr);



////////////////////////////////////////////////////////////////////////////////////////////////

//get average age

function getAverageAge(arr){
  return (  arr.reduce( (sum,item)=> sum+=item.age , 0 ) /arr.length) ;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28



///////////////////////////////////////////////////////////////////////////////

//find unique element

function unique(arr) {
  let seen = [];
  arr.forEach( function(item) { if (!seen.includes(item)) seen.push(item);   }  );
  return seen;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O



////////////////////////////////////////////////////////////////////////////////////////////


function groupById(arr){
  return  arr.reduce( (accumulator, item)=> {accumulator[item.id] = item; return accumulator;}, {} );
}

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

for (key in usersById)
  alert(`${key}: ${usersById[key]}`);

alert(`Original Array: ${users}`);
/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
