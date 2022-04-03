"use strict"

let person = {name:"chewzzz", age:20,
family:{
  pax: 6,
  location: "Kuala Lumpur",
}, };

let json = JSON.stringify(person);
alert(json);
json = JSON.stringify(person, ["name", "family"]);
alert(json);    // ...."family":{}

json = JSON.stringify(person, ["name", "family", "pax", "location"]);
alert(json);    // ...."family":{"pax": 6, "location":"Kuala Lumpur"}


//using function replacer
alert(JSON.stringify(person, function replacer(key, value) {alert (`${key}: ${value}`); return value; }) );

// space as third argument of JSON.stringify() results in indentation corresponding with the value. For better readability
alert(JSON.stringify(person, null, 4));


// toJSON()
let family = {
  knowsMyFriend: true,
  toJSON(){
    return this.knowsMyFriend;
  }
};

let friend = {
  name:"www",
  family
};

alert(JSON.stringify(friend));    //{"name":"www", "family":true}


// JSON.parse()
let personStr = JSON.stringify(person);
let data = JSON.parse(personStr);
alert(data.family.location);

// reviver function as second argument of JSON.parse()
data = JSON.parse(personStr, function(key, value){
  alert(`${key}: ${value}`)
});

let meetingTime = `{ "meeting": [
  {"title": "Introduction", "date": "2017-11-30T12:00:00.000Z"},
  {"title": "Proposal", "date": "2017-04-18T12:00:00.000Z"}
] }`;

let time = JSON.parse(meetingTime, function(key, value){
  if (key == "date") return new Date(value);
  return value;
});

alert(`First Meeting: ${Date.parse(time.meeting[0].date)}`);
alert(`Second Meeting: ${Date.parse(time.meeting[1].date)}`);
