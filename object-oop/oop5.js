//Uncaught TypeError: this.getFromUser is not a function


"use strict"

function Person() {

  this.abtMe =  {
    name: "chew",
    age: 20,
    country: "malaysia",
    learning: "javascript",
  };

  this.getFromUser = function(args)
  { let data =  (+prompt(args)); return data; };

  this.getBirthDate = {

    day: function() { this.abtMe.birthDay= this.getFromUser("Enter Birth Day (1-31)"); },

    month: function() { this.abtMe.birthMonth=this.getFromUser("Enter Birth Month (1-12)"); },

    year: function() { this.abtMe.birthYear= this.getFromUser("Enter Birth Year"); },
  };

    this.getBirthDate.day();
    this.getBirthDate.month();
    this.getBirthDate.year();
}

let person  = new Person();

for (let key in person.abtMe){
  alert(key+": "+person.abtMe[key]);
}





////////////////////////////////////////////////////////////////////

let Person = {

      abtMe:{
      name: "chew",
      age: 20,
      country: "malaysia",
      learning: "javascript",
    },

   getBirthDate: {

    day: function() { this.abtMe.birthDay= this.getFromUser("Enter Birth Day (1-31)"); },

    month: function() { this.abtMe.birthMonth=this.getFromUser("Enter Birth Month (1-12)"); },

    year: function() { this.abtMe.birthYear= this.getFromUser("Enter Birth Year"); },
  },

    getFromUser: function(args)
    { let data =  (+prompt(args)); return data; };

    this.getBirthDate.day();
    this.getBirthDate.month();
    this.getBirthDate.year();
}
