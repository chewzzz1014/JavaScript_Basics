"use strict"

// 6 static methods in Promise class

// Promise.all(iterable)
// reject as whole if any of the Promise in the iterable rejects (all or nothing)
let urls = [
  "https://google.com",
  "https://yahoo.com",
  "https://javascript.info"
];

let requests = urls.map(url => fetch(url));

Promise.all(requests)
  .then(responses => responses.forEach(
    response => alert(`${response.url}: ${response.status}`)
  ));

// if any item in the iterable is not a Promise object, it's passed to the resulting array "as is"

Promise.all({
  new Promise((resolve, reject) => {
    setTimeout( ()=> resolve(1), 1000);
  }),
  2,
  3
}).then(alert);


// Promise.allSettled
// have {status: "fulfilled", value: result} for successful responses
// {status: "rejected", reason: error} for errors
let urls =  [
  "https://google.com",
  "https://yahoo.com",
  "https://javascript.info"
];

Promise.allSettled(urls.map(url => fetch(url)))
  .then(results => {
    results.forEach((result, num) => {
      if (result.status == "fulfilled")
        alert(`${urls.[num]}: ${result.valus.status}`);
      if (result.status == "rejected")
        alert(`${urls[num]}: ${result.reason}`);
    });
  });

  // Promise.race(iterable)
  //waits for the first settled promise and get its result or error

  Promise.race([
    new Promise(..... reject(1));   // take this
    new Promise(..... resolve(1)); // ignored
    new Promise(..... resolve(1)); // ignored
  ]).then(alert);


  // Promise.any(iterable)
  // similar to Promise.race(iterable) EXCEPT THAT only consider the promise that resolved
  Promise.race([
    new Promise(..... reject(1));   // not this
    new Promise(..... resolve(1)); // take this
    new Promise(..... resolve(1)); // ignored
  ]).then(alert);

// Promise.resolve(value) returns a resolved promise with result = value
// Promise.reject(error) returns a rejected promise with error
