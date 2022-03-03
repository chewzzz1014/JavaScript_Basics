//primitive types in JS include boolean, string, number, null, undefined
//non primitive types include object

values = [23, true, null, undefined, "45"]
values.forEach( function(value){ console.log(value+" is type "+typeof value); });
//bug: null is type of object


//variable that doesnt' been assgined value will hold "undefined"
var z;
console.log("Value of variable z:",z,"\nType of z:",typeof z)


//variable can hold different type of values when reassigned
var z = "wow";
console.log("Value of z:",z)
z= (typeof z==="number")? true:23
console.log("Value of z after update:",z)
