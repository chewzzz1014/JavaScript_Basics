"use strict"

//copying reference of Object
let car = {
  model: "Myvi",
  "movement source": "fuel",
};

let electricCar = car; //copying reference of object "car"

electricCar["movement source"] = "electric"; //modified car["movement source"] as well


alert(car["movement source"]); //"electric"

/////////////////////////////////////////////////////////////////

//cloning Object: cloning person into user
let person = {
  name: "lee",
  age: 30,
  hobby: "read",
  "num of siblings": 3, //hanging comma
}

let user = {}

//alternative 1: iterating properties one by one

for (let key in person)
  user[key] = person[key];

for (let key in user)
  alert(key+": "+ user[key]);


//alternative 2: use Object.assign method

Object.assign(user, person); //returns object "user"
for (let key in user)
  alert(key+": "+ user[key] );

person["age"] = 35;
Object.assign(user, person); //since property "age" already existed, value will be overwritten
for (let key in user)
  alert(key+": "+user[key]);
