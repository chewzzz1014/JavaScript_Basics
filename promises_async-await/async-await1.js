"use strict"

// make asynchronous code look synchronous
// based on Promises. Make sure to use async/await whenever using Promises 

function promiseTimeout(ms){
  return new Promise((resolve, reject)=>{
    setTimeout(resolve, ms);
  });
}

// "async" keyword to indicate that this function has await call in it
async function simulateLongOperation(){
  await promiseTimeout(1000); //pauses while operation completes
  return 42;  // same as Promise.resolve(42);
}

async function run(){
  const answer = await simulateLongOperation(); // retrieves successful value
  console.log(answer);
}

run();
