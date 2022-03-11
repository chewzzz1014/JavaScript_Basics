//no need to defined size of array when declared

var array = []
array[0] = "z"
array[3] = null
//empty element at index 1 and 2

console.log(array)


//array as object with property. these properties doesnt count into length of array
array["name"] = "wow"
array["age"] = 12
console.log(array.age)
console.log(array.name)
console.log(array.length) //still 4


//convert from arguments to array
function f(){
  var arr = Array.prototype.slice.call(arguments); //conversion
  arr.forEach( function(value) {console.log(value); } );
  console.log(arr);
}
f("I","am","learning ")

//operations on string
a = "foo"
var c = Array.prototype.join.call(a,"-");
var d = Array.prototype.map.call(a, function(v){ return v.toUpperCase()+"."; }).join("");
console.log("c:",c,"\nd:",d)
//c = "f-o-o"
//d = "F.O.O."
