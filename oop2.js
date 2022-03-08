"use strict"

//use this keyword in function for reusability of function

let properties = ["Name", "Age", "Favourite Colour"];

let calcBornYear = function(){ return (2022-this.Age); };

let me = {
  [properties[0]] : "zzz",
  [properties[1]]: 20,
  [properties[2]]: "Blue",
};

let you = {
  [properties[0]]: "lee",
  [properties[1]]: 25,
  [properties[2]]: "Violent",
};


me.calc = calcBornYear;
you.calc = calcBornYear;


properties.push("Born Year");
me["Born Year"] = me.calc();
you["Born Year"] = you.calc();



properties.forEach(function(property) {alert(property+": "+me[property]);} );

properties.forEach(function(property) {alert(property+": "+you[property]);} );
