//normal map prevent garbage collection of key object but WeakMap doesn't
// WeakMap can only have objects as keys

//normal Map
let obj = { name: "chewzzz", };
let normalMap = new Map();
normalMap.set(obj, 1); //obj(an object) as key in normal map

obj = null;   //overwrite the reference of object

alert(normalMap.get(obj));    //obj can't be accessed this way. we have undefined here.

alert(normalMap.keys());
for (let key of normalMap.keys())   //or access through this way
  alert(key);


//weak Map
let obj1 = { anything: "inside anything", };
let weakMap = new WeakMap();
weakMap.set(obj1, 1);

obj1 = null;   //overwrite the reference of object

alert(waekMap.get(obj1));   //Error when trying to access obj1 that had been overwritten with null
alert(weakMap.set(1,"one"));    //Error. Key of WeakMap can only be object (not primitive type)




-
