"use strict"

// catching error in promises
fetch("https://invalid-url")    // rejects
  .then(response => response.json())
  .cach(err => alert(err))    // will catch the error here

// implicit try...catch
new Promise ( (resolve, reject) => {
  throw new Error ("Error!!");
}).catch(alert);    // display the error if the promise excutor throws an error (which it did in this case)
// Error: Error!!

// it can also be written as
new Promise ( (resolve, reject) => {
  reeject(new Error ("Error!!"));
}).catch(alert);

// if the error existed in then block, the same result will be obtained
//that is, the code inside the catch will be executed
new Promise ((resolve, reject){
  resolve("Everything ok!");
}).then( (val)=>{
  notAValidStmtInJS   // error here
}).catch(alert);    // display the error

// rethrowing errors
new Promise((resolve, reject) =>{
  throw new Error("NOOOOOOO");    // 1st
}).catch ( (val) => {

    if (val instanceOf URIError)
      // handle it
    else
      throw error;``// 2nd

}).then( ()=>{
  // do something here
  // will be skipped
}).catch( error => {
  alert("Not sure what's wrong :(");
});
