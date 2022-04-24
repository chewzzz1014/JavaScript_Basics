"use strict"

let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};

// chained prototype
pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

alert(`pockets.pen: ${pockets.pen}`);   //3 (inherited from table)
alert(`bed.glasses: ${bed.glasses}`);   //1 (inherited from head)


// demonstrate that "this" is not affected by prototype
let animal = {
  eat(){
    this.full = true;
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.eat();    // rabbit.full = true
alert(`Is rabbit full? : ${rabbit.full}`);    //true
alert(`Is animal full? : ${animal.full}`);    //undefined
// even tho eat() belonged to "animal", but the "this" referred to the object before the comma, which is "rabbit" in this case
