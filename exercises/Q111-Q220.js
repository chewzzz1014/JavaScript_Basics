// Q111: What's JSON
// lightweight format used for data interchanging


// Q112: Syntax rules of JSON
/*
    1. Data in name/value pairs
    2/ Separated by commas
    3. {} hold objects
    4. [] hold arrays
*/


// Q113: Purpose of JSON stringify
// object/array => JSON
const userJSON = {'name': 'John', age: 31}
const userString = JSON.stringify(user)
console.log(userString)


// Q114: Parse JSON string
// string => object/array
const userString1 = '{"name": "John", "age": 31}'
const userJSON1 = JSON.parse(userString1)
console.log(userJSON1)


// Q115: Why need JSON
// exchange data between browser and server
// sent to and from a server 


// Q116: PWA (Progressive Web Application)
// type of mobile app delivered through web


// Q117: clearTimeout
// clear the timeout which had been set by setTimeout()
// return value of setTimeout() is stored in var and passed into clearTimeout to clear the timer
let msg
function greeting() {
    alert('Good morning')
}

function startTimeout() {
    msg = setTimeout(greeting, 3000)
}

function stop() {
    clearTimeout(msg)
}

// Q118: clearInterval
// clear interval that set by setInterval()
function startTimeout() {
    msg = setInterval(greeting, 3000)
}

function stop() {
    clearInterval(msg)
}


// Q119: redirect new page
// using window's 'location' property
function redirect() {
    window.location.href = 'newPage.html'
}


// Q220: substring check
let mainString = 'hello world'
let subString = 'wor'

// 1. includes()
console.log(mainString.includes(subString))
// 2. indexOf()
console.log(mainString.indexOf(subString) !== -1)
// 3. RegEx
let myRegex = /wor/
myRegex.text(mainString)