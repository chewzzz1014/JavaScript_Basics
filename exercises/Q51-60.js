// Q51: Promise
// object that may produce a single val for some time in the future with either resolved value or reason that it's not resolved
// states: fulfilled, pending, rejected

const promise = new Promise(resolve => {
    setTimeout(() => { resolve('I am a Promise!!!!') }, 5000)
}, reject => {
    reject('Something wrong...')
})


// Q52: Why need promise?
// to handle asynchronous operations
// provide an alternative approach for callbacks


// Q53: States of promise
// pending: initial state of Promise before operations begins
// fulfilled: specified operation was completed
// rejected: operation did not complete. Error value will be thrown


// Q54: Callback function
// function passed into another function as an argument. Invoked inside the outer function to complete an action

function callbackFunc(name) {
    console.log(`Hello ${name}`)
}
function outerFunc(callback) {
    let name = prompt('Enter your name')
    callback(name)  // this will get executed first!
}

outerFunc(callbackFunc)


// Q55: Why need callback?
// JS will keep executing while listening for other events
// to make sure that certain code dont execute until other code finished execution
function firstFunc() {
    setTimeout(() => console.log('First function...'), 1000)
}
function secondFunc() {
    console.log('Second function...')
}
firstFunc()
secondFunc()

// Output:
// Second function
// First function


// Q56: 