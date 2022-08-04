"use strict"

let ladder = {
  step: 0,
  up(){
    this.step ++;
    return this   // to chain the methods
  },
  down(){
    this.step --;
    return this;
  },
  showStep(){
    alert(this.step);
  },
};

// keep in mind, to call function that uses 'this' in its block requires object name in front of '.'
// eg. user.greet()


// able to make function call that involve "this" even before it was a function
// bcs previous function call return "this" that refers to the object
ladder.up().up().down().showStep().down().showStep();
