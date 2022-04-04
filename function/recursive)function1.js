"use strict"

//sum all numbers until the given number

function timePassed(start){
  let end = new Date();
  return (end-start);
}

// solution 1: using for loop
function sumToL (n){
  let sum = 0;
  for (let i=n; i<=1; i--)
    sum += i;
  return sum;
}

// solution 2: recursive implementation
function sumToR(n){
  if (n==1)
    return n;
  else
    return n+sumToR(n-1);
}

// solution 3: arithmetic progression
function sumToA(n){
  return (n/2)*(2+(n-1));
}

let start = new Date();
alert(`Sum is ${sumToL(18)} and this iterative approach took ${timePassed(start)} milliseconds.`) ;    // 1

start = new Date();
alert(`Sum is ${sumToR(18)} and this recursive approach took ${timePassed(start)} milliseconds.`) ;

start = new Date();
alert(`Sum is ${sumToA(18)} and this arithmetic approach took ${timePassed(start)} milliseconds.`) ;

// calculate factorial
function factorial(n){
  if (n==1)
    return 1;
  else
    return n*factorial(n-1);
  /*
   *  or
   *  return (n==1)? 1: n*factorial(n-1);
   */
}

alert(factorial(5));    //120


//  fibonacci
function fib(n){
  if (n===1 || n===2)
    return 1;
  else
    return fib(n-1)+fib(n-2);
}

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757 (runs very slow)


// output all values in a linked list

let linkedList = {
  value: 1,
  next: {
    value: 2,
    next:{
      value: 3,
      next:{
        value: 4,
        next: null,
      }
    }
  }
};

// solution 1: iterative
function printLinkedListI(list){
    let tmp = list;
    while (tmp){
      alert(tmp.value);
      tmp = tmp.next;
    }
}

// solution 2: recursive approach
function printLinkedListR(list){
  alert(list.value);

  if (list.next)
    printLinkedListR(list.next);
}

let start = new Date();
printLinkedListI(linkedList);
let end = new Date();
alert(`Took ${end-start} milliseconds.`);

start = new Date();
printLinkedListR(linkedList);
end = new Date();
alert(`Took ${end-start} milliseconds.`);
