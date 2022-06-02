"use strict"

// synchronous iteration allow iteration over data that comes asynchronously

// using iterator
let range = {
  from: 3,
  to: 10,

  [Symbol.iterator](){
    return{
      current: this.from,
      last: this.to,

      next(){
        if (this.current <= this.last)
          return {done: false, value: this.current++};
        else
          return {done: true};
      }
    };
  }
};

for(let val of range)
  alert(val);


// make an object iterable asynchronously
// Similar to previous code, but using asyncIterator and next() will return a promise
let range = {
  from: 3,
  to: 10,

  [Symbol.asyncIterator](){
    return{
      current: this.from,
      last: this.to,

      next(){
        await new Promise(resolve => setTimeout(resolve, 1000));    // return a promise
        if (this.current <= this.last)
          return {done: false, value: this.current++};
        else
          return {done: true};
      }
    };
  }
};

( async () => {
  for await (let v of range)  // add "await" to call "range[Symbol.asyncIterator]()" once and then its next() for values
      alert(v);
})()
