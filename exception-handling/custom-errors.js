"use strict"

// customized an error class that inherited from Error class

class NotEvenError extends Error{
  constructor(message){
    super(message);
    this.name = "NotEvenError";
  }
}

function catchError(){
  throw new NotEvenError("Not an even number!");
}

let start = new Date();
try{
  let num = +prompt("Enter an even number");
  if (num %2 !== 0)
    catchError();
  alert("Yess!!!");
} catch(err){
  alert(`${err.name}: ${err.message}`);
} finally{
  let final = new Date() - start;
  alert(`Took ${final} ms.`);
}

// example 2
class FormatError extends SyntaxError{
  constructor(msg){
    super(msg);
    this.name = this.constructor.name;
  }
}

let err = new FormatError("formatting error");

alert( err.message ); // formatting error
alert( err.name ); // FormatError
alert( err.stack ); // stack

alert( err instanceof FormatError ); // true
alert( err instanceof SyntaxError ); // true (because inherits from SyntaxError)
