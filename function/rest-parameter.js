// Javascript allow arbitrary number of  function parameters

// using rest parameter, with syntax [...args]
function sumAll (...args){
  return args.reduce( (accumulator, item)=> accumulator+=item, 0);
}

sumAll(2,4,6,8,10);

// or using combination of reset parameter, given that the rest parameter must come last
function printAll(name, age, ...more){
  alert(`Name: ${name}`);
  alert(`Age: ${age}`);
  more.forEach( (item)=>alert(item));
}

printAll("chewzzz",20, "Learning Javascript!", ":)", "Wow");


// "arguments" as array-like object in function by default
// noted that "arguments" just array-like and not a real array (unlike rest parameter) thus we can't use array's method on it
function capitaliseAll(){
  alert(`${arguments.length} argument(s) are provided.`);
  let capitalised = []
  for (let item of arguments)
    capitalised.push(item);

  return capitalised.map( (item)=> item.toUpperCase() );
  // or return Array.from(arguments).map((ele)=> ele.toUpperCase());
}

alert( capitaliseAll("what????", "are you sure", "hmmmm"));



// spread syntax to convert an iterable to a list of parameters


// spread syntax can be used on array and string
let oddNumber = [26, 64, 98, 236];
alert(`The greatest number is ${Math.max(...oddNumber)}`);

let evenNumber = [23, 45, 77, 345];
oddNumber.sort((a,b)=>(a-b));
evenNumber.sort((a,b)=>(a-b));
let merged = [0, ...evenNumber, ...oddNumber, -1000];
//using spread syntax to merge 2 array
alert(merged);
// using spread syntax to copy array without copying reference
let arr = ["A", "B", "C", "D", "E"];
let arrCopied = [...arr];    // arr -> a list of parametes -> array
alert(`Do arr and arrCopied point to the same reference? ${arr === arrCopied}`);    //false

arr.push("F")
alert(arr);
alert(arrCopied);   //noted that arr and arrCopied are two completely distinct array except that they have same contents (before pushing "F" to arr). Any changes on arr has no effect on arrCopied
