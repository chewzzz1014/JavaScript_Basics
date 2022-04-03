// turn obj into JSON and vice versa

let user = { name:"John Smith", age: 35};
user = JSON.stringify(user, null, 4);
let anotherUser = JSON.parse(user);
alert(anotherUser);

// exclude backreferences (circular references) as JSON can't stringify them

let room = { number: 23 };
let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name:"Alice"}],
  place: room
};

//circular references
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value){
  return ( key!="" && value==meetup)? undefined: value;
}));
