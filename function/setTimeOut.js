// callback function

console.log("HELLO"); // 1

setTimeout(()=>{
  console.log("Hello");
}, 3000); // 3

console.log("Bye"); // 2



// setInterval

// get id of setInterval
const id = setInterval(()=>{
  console.log("Hi");
}, 2000);

// clearInterval using the id obtained
clearInterval(id);
