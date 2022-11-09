"use strict"
// properties in an object have values and special attributes (also known as flags)

// acessing the values and attributes of properties of an object
// flags: writable, enumerable, configurable
let user = {
  username:"chewzzz",
  family:{
    pax: 6,
    residence: "Kuala Lumpur",
  },
  greet(){
    alert(`Hello, ${this.username}!`);
  },
};

user.boundGreet = user.greet.bind(user);
// user has properties "username"(string), "family"(object), "greet"(function), "boundGreet"(binded function)

for (let key in user){
  alert(`Descriptor of property ${key}:`);
  alert(JSON.stringify(Object.getOwnPropertyDescriptor(user, key), null, 2) );
}

// change the flags using Object.defineProperty(obj, property, descriptor)
// if the flag is not provided, it's false by default
Object.defineProperty(user, "isMale",{ value: false } );
alert(JSON.stringify(Object.getOwnPropertyDescriptor(user, "isMale"), null, 2) );
// writable, enumerable and configurable are false

//set the flag of the existed property
Object.defineProperty(user, "isMale",{writable: true, enumerable: true, configurable: true});
alert(JSON.stringify(Object.getOwnPropertyDescriptor(user, "isMale"), null, 2) );
// TypeError: Cannot redefine property: isMale because configurable is false


// if writable is false, we can't reassign the defineProperty
// in non-strict mode, no error occur when violating the flag, just that the operation won't succeed

// if enumerable is false, the property won't appear in for..in
for (let key in user)
  alert(key);   // all properties, except isMale are printed

// if configurable is false, we can't delete the property and we can't modify the attributes
alert( JSON.stringify(Object.getOwnPropertyDescriptor(Math, 'PI'), null, 2 ) );
