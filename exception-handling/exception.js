"use strict"

function criticalCode(){
  throw "throwing an exception..."; // 2
}

function logError(ex){
  console.log(ex);
}

throw "First exception thrown...";
// error! We did not catch this error

try{
  criticalCode()  // 1
} catch(ex){
  console.log('Error Detected');  // 3
  logError(ex); // 4
} finally{
  console.log('Done');  // 5
}
/*
Output:
  Error Detected
  throwing an exception...
  Done
*/
