"use strict"
//create object and accessing its properties

let user = {}; //object literal syntax
let admin = new Object(); //object constructor syntax

user = {
  name: "Lee",
  age: 20,
  country: "MYS", //hanging comma
};

admin = {
  name: "John",
  "staff number": 222222, //hanging comma
};

//accesing values
alert(admin.name);
alert(admin["staff number"]);
alert(admin["name"]);
alert("age" in admin); //false

//add key
user["language"] = "JavaScript";

// delete property
delete admin["staff number"];

// computed properties
let vege = prompt("Pick one vegetable", "Cabbage");
let grocery = {
  [vege]: 3;  //name of property is taken from variable
}
slert(grpcery.Cabbage);

//looping through object "user"
for (let key in user){
  alert("Key of object user: "+key);
  alert("Value of repective key: "+user[key]);
}
//////////////////////////////////////////////

admin["age"] = 30;

let ages = {
  "user": user.age,
  "admin": admin["age"], //hanging comma
}

//calc avg age using object "ages"
let sum = 0;
for (let ppl in ages){
  alert(ppl+": "+ages[ppl]);
  sum+=ages[ppl];
}

alert("Average age is "+(sum/2));


////////////////////////////////////////////////
// modifying numeric values in object "menu"
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};


function multiplyNumeric(menu){
  for(let numericKey in menu)
  {
   if (typeof menu[numericKey]==="number")
    { menu[numericKey]*=2; }
  }
}

multiplyNumeric(menu);

for(let key in menu){
  alert("Key: "+key+"\nValue: "+menu[key]);
}
