"use strict"

// promisification: conversion of a function that accepts a callback into a function that returns a promise

// function that returns accepts callback
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src= src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error (`Script load error for ${src}`));

  document.head.append(script);
}

// function that returns promise (also known as wrapper)
function loadScriptPromise = function(src){
  return new Promise( (resolve, reject) => {
    loadScript(src, (err, script) => {
      if (err) reject(err);
      else resolve(script);
    });
  });
};

// function that accepts a to-promisify function f and returns a wrapper function
function promisify(f){
  return function(...args){
    return new Promise( (resolve, rejetc) => {
      function callback(err, result){
        if (err) reject(err);
        else resolve(result);
      } // closing function callback

       args.push(callback);
       f.call(this, ...args);
    }); // closing return Promise
  };  // closing return statement of function promisify
}   // closing function promisify

let loadScriptPromise = promisify(loadScript);
loadScriptPromise(...).then(...);
