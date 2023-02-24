// Q41 & Q42: Comparison of cookie, local storage and session storage
/**
 * 1. Cookie: For server side and client side. Can set expiry data. SLL supproted. Max data size is 4KB
 * 
 * 2. Local storage: For client side only. Valid till its been deleted. Does not support SSL. Max data size is 5MB.
 * 
 * 3. Session storage: For client side only. Valid till tab is closed. Does not support SSL. Max size is 5MB. 
 */


// Q43: How to access web storage
// Window object implements WindowLocalStorage and WindowSessionStorage objects which has localStorage (window.localStorage) and sessionStorage (window.sessionStorage)

// set local storage
localStorage.setItem('logo', document.getElementById('logo').value)
// get local storage
localStorage.getItem('logo')


// Q44: Methods of session storage

// save data
sessionStorage.setItem('key', 'value')
// get data
let data = sessionStorage.getItem('key')
// remove data
sessionStorage.removeItem('key')
// remove all data
sessionStorage.clear()


// Q45: storage event & event handler
// storage event is an event that fires when a storage area has been changes in the context of another documents
// onstorage is event handler for processing storage events
window.onstorage = function (e) {
    console.log(`The ${e.key} key has been changed from ${e.oldValue} to ${e.newValue}`)
}


// Q46: Why web storage?
/**
 * 1. More secure
 * 2. Can store large amounts of data locally
 * 3. Info is never transferred to server
 */


// Q47 & Q48: How to check the web storage/web worker browser support?
if (typeof (Storage) !== 'undefined') {
    // code for localStorage/sessionStorage
} else {
    // no web storage support
}

if (typeof (Worker) !== 'undefined') {
    // code for web worker support
} else {
    // no web worker support
}


// Q49: Examples of web worker

let i = 0
function timedCount() {
    i = i + 1
    postMessage(i) // post a message back to HTML page
    setTimeout('timedCount()', 500)
}
timedCount()

if (typeof (w) == 'undefined') {
    w = new Worker('counter.js') // create a new web worker object if browser doesn't support web worker
}

// receive messages from web worker
w.onmessage = function (event) {
    document.getElementById('message').innerHTML = event.data
}

// terminate web worker (stop listen for message)
w.terminate()

// resued the web worker
w = undefined


// Q50: restrictions of web workers on DOM
// web workers dont have access to window object, document object and parent object (since web worker are defined in an external files)