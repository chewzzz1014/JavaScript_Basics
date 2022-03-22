//get key, values or both of Map

let anotherMap = new Map();

anotherMap.set(4,"four")
           .set(2,"two")
           .set(1, true)
           .set(0, false)
           .set("half", 0.5)
           .set("Quarter", 0.25)
           .set(person, "me");

let keys = [];
for (let key of anotherMap.keys()){
    keys.push(key);
}
keys.forEach(function(item){alert(item)});


let values = [];
for (let value of anotherMap.values()){
  values.push(value);
}
values.forEach(function(item){alert(item)});


let entries = [];
for (let entry of anotherMap.entries())
{
  entries.push(entry);
}
entries.forEach(function(item){alert(item)});
entries

////////////////////////////////////////////////////////////////////////////////////////////////////

//passing array as key-value pairs of Map

let arrayToMap = new Map(
  [1,"one"],
  [2, "two"],
  [3, "three"]
);

alert(arrayToMap);


//passing object as ky value pairs of map
let person = {
  name : "chewzzz",
  age: 20,
  family: {
    members: 6,
    origin: "Malaysia",
  },                        //hanging comma
};

alert(Object.entries(person));

//use Map to iterate through object person
for (let key of Object.entries(person).keys())
    { alert(key); }

//ERROR WHEN CALLING FUNCTION getInsideObj() to access key in person.family

for (let [key, value] of Object.entries(person).entries()){
   if (typeof value[1] === "object" && value[1])    //if it's an object, trying to print all key-value pairs inside that object
        getInsideObj(key, person, value[0]);
   else
        alert(`Index: ${key}\nKey: ${value[0]}\nValue: ${person[value[0]]}\n\n`);
}

function getInsideObj (idx, obj, att){
  for (let [index, ele] of Object.entries(obj.att).entries() )
     console.log(`Index: ${idx}\nKey: ${ele[0]}\nValue: ${ele[1]}\n`);
}
