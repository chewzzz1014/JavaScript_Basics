"use strict"

//attempt in accessing non-existed property of object raises error
//so there's a need to check for its existence before using them


//in this case, error (TypeError) is raised since cat.owner is undefined
let cat = {};
alert(cat.owner.name);

//alternative 1: using if
let cat = {};
alert(cat.owner ? cat.owner.name : undefined); //if cat.owner is not undefined, access its name; else print "undefined"

//this works but quite troublesome to repeat "user.owner" twice. In addition, the code looks confusing if we want to check for nested property. eg:
alert(cat.owner ? cat.owner.name ? cat.owner.name.firstName : null : null); //checking cat.owner -> cat.owner.name -> cat.owner.name.firstName

//alternative 2: using AND
alert(cat.owner && cat.owner.name && cat.owner.name.firstName);
//same problem with alternative 1


//alternative 3: optional chaining (?.)
// Stops the evaluation if the value before ?. is undefine or null and then return undefined
let cat = {

   owner :{
    name : "zzz",
  },

  food :{
    favFood: "fish",
    hatedFood: "none",
  },

};

alert(cat ?. owner ?. name ?. firstName ); //undefined
alert(cat ?. ["owner"] ?. ["name"] ?. ["firstName"]); //undefined
alert(cat ?. food ?. favFood); //fish

// cat must be declared (null is allowed)
// ?. checks whether the value before it is null or undefined and return "undefined"
//else, chain the property with the values before first ?.
