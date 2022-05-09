"use strict"

// mixins allow a class to use methods of another class without inherit it

// an object with methods we need
let mixin = {
  greet(){ alert(`Hi ${this.name}!`) },
  farewell(){ alert(`Bye ${this.name}!`); },
};

// a class
class Guest{
  constructor(name){
    this.name = name;
  }
}

// copy the methods in mixin into class
Object.assign(Guest.prototype, mixin);

new Guest("Alice").greet();

// mixin can make use of inheritance inside themselves
let mixin1 = {
  print(val){
    alert(val);
  }
};

let mixin2 = {
  __proto__: mixin1,  // mixin2.__proto__ === mixin1
  printStatus(){
    super.print(`Status: ${this.status}`);
  }
};

class Parcel{
  constructor(status){
    this.status = status;
  }
}

Object.assign(Parcel.prototype, mixin2);
new Parcel("Waiting at Hub").printStatus();   // Status: Waiting at Hub


// mixin example to add event-related functions to any class/object
// source: https://javascript.info/mixins

let eventMixin = {
  // subscribe to event
  // eg: menu.on("select",function(item){...})
  on(eventName, handler){
    // an array of handlers for each event in eventHandlers object
    if(!this._eventHandlers)
      this._eventHandlers = {};
    if(!this._eventHandlers[eventName])
      this._eventHandlers[eventName] = [];
    this._eventHandlers[eventName].push(handler);
  },

  // cancle the subscription
  // eg: menu.off("select", handler)
  off(eventName, handler){
    let handler = this._eventHandlers?.[eventName];
    if(!habdlers) return;
    for(let i=0;i<handlers.length; i++){
      if(handlers[i] === handler)
          handlers.splice(i--, 1);
    }
  }
},

  // generate an event with the given name and data
  // eg: this.trigger("select",data1, data2)
    trigger(eventName, ...args){
      if(!this._eventHandlers?.[eventName]) return;

      // call handlers
      this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
    }
  };
