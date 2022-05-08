"use strict"
/* 2 types of object fields (properties and methods) in JS:
 - public : accessible from anywhere
 - private : accessible inside the class only
 - protected : not supported by JS language
*/

// waterAmount is protected. Use setter or getter to access it
class CoffeeMachine{
  _waterAmount = 0;   // by convention, pr properties are prefixed with underscore
  constructor(power){
    this._power = power;
    alert(`Machine power: ${this.power}`);    // access power from outside using getter
  }
  get power(){
    return this._power;
  }
  // setter
  set waterAmount(val){
    if (val<0) val = 0;
    this._waterAmount = val;
  }
  // getter
  get waterAmount(){
    return this._waterAmount;
  }
}

let coffeeMachine = new CoffeeMachine(150);
// acess waterAmount outside the class
coffeeMachine.waterAmount = 155;
alert(`Update water amount: ${coffeeMachine.waterAmount}`);


// more recent update: private properties are prefixed with #
// private properties are not inherited. But they can be acessed in child class using setter n getter
class waterDispenser{
  #waterLimit = 200;

  #fixWaterAmount(val){
    if (val<0) return 0;
    if (val>this.#waterLimit) return this.#waterLimit;
  }

  setWaterAmount(val){
    this.#waterLimit = this.#fixWaterAmount(val);
  }
}

let myHome = new waterDispenser();
// attempts to acess private properties outside the class
myHome.#fixWaterAmount(222);    // ERROR
myHome.#waterLimit = 250;   // ERROR
