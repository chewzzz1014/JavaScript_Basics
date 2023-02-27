// Q61: Main rules of promise
// 1. Promise is an object that supplies standard-compliant .then() method
// 2. Pending promise may transition into fulfilled or rejected state (pending => fulfilled/rejected)
// 3. Fulfilled and rejected promise is settled. Must not transition into any other state
// 4. Once promise is settled, value must not be change


// Q62: Callback in callback
// nest one callback in another callback to execute the actions sequentially one by one
loadScript('./script1.js', function (script) {
    console.log('first script loaded')
    loadScript('./script2.js', function (script) {
        console.log('second script loaded')
        loadScript('./script3.js', function (script) {
            console.log('third script loaded')
        })
    })
})


// Q63: Promise chaining
// process of executing a sequence of asynchronous task one after another using promises 
new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000)
}).then(function (result) {
    console.log(result) // 1
    return result * 2
}).then(function (result) {
    console.log(result) // 2
    return result * 3
}).then(function (result) {
    console.log(result) // 6
    return result * 4
})


// Q64: Promise.all
// promise that takes an array of promises as input. It gets resolved when all promises get resolved or any one of them gets rejected
Promise.all(Promise1, Promise2, Promise3, Promise4)
    .then(result => { console.log(result) })


// Q65: Purpose of race method in promise
// Promise.race() will return the promise instace which is firstly resolved or rejected
let promise1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, 'one')
})
let promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('two'), 100)
})
Promise.race([promise1, promise2]).then(function (value) {
    console.log(value) // 'two'. Both promises will resolve but promise2 is faster
})


// Q66: Strict mode
// new feature in ECMAScript 5 that allows us to place program/function in 'strict' context
// to prevent certain actions frombeing taken and throws more exceptions


// Q67: Why strict mode?
// to write 'secure' JS by notifying 'bad syntax' into real errors
// eg, eliminates accidentally creating global variable/assignment to non-writable property, getter-only property etc


// Q68: Declare strict mode
'use strict' // at the beginning of script (global scope) or function


// Q69: !!
// convert value to boolean type
let isIE8 = false
isIE8 = !!navigator.userAgent.match(/MSIE 8.0/)
console.log(isIE8) // true/false 
console.log(navigator.userAgent.match(/MSIE 8.0/)) // Array/null 


// Q70: delete
// delete the property and value of an object
let user = {
    name: 'John',
    age: 20
}
delete user.age
console.log(user) // {name: 'John'}
