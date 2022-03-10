"use strict"

//declaration of symbol
let id = Symbol("id");

//declare symbol as property of object
let me = {
  name: "zzz",
  [id]: 1,
};

//id is unique even they have the same decription
let id2 = Symbol("id");
alert( id === id2); //false

//id is ignored in iteration of object's properties and cloning of object (Object.assign())
for (key in me)
  alert(key+": "+me[key]); //Output: name: zzz

let clone = Object.assign({}, me); //clone contains property "name" only


//Symbol.for(name_of_symbol) read symbol from registry. If it doesn't exist, create new Symbol

let id3 = Symbol.for("anotherId"); //create new symvbol
let id4 = Symbol.for("anotherId"); //read symbol
alert( id===id4 ); //true
//in this case, id3 and id4 are considered the same


//Symbol.for(name_of_symbol) get symbol by name_of_symbol
//Symbo.keyFor(symbol) get name by Symbol

alert(Symbol.keyFor(id4)); //anotherId
