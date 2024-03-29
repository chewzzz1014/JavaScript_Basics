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


// Q56: Callback hell
// multiple nested callbacks 
// example:
async1(function () {
    async2(function () {
        async3(function () {
            async4(function () {
                //...
            })
        })
    })
})


// Q57: Server-sent events (SSE)
// server push technilogy
// enables browser to receive automatic updates from a server via HTTP connection w/o resorting to polling
// one way communication channel: from server to client only


// Q58: Receive server-sent notifications
// EventSource object is used to receive server-sent event notifactions
if (typeof (EventSource) !== 'undefined') {
    let source = new EventSource('sse_generator.js')
    source.onmessage = function (e) {
        document.getElementById('output').innerHTML += e.data + '<br>'
    }
}


// Q59: Check browser support for server-sent events
if (typeof (EventSource) !== 'undefined') {
    // server-sent events supported
} else {
    // server-sent events not supported
}


// Q60: Events available for server sent events
// onopen: when a connection to server is opened
// onmessage: when a message is received
// onerror: when an error occurs