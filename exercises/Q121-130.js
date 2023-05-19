// Q121: validate email
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase());
}

// Q122: get/change current url
console.log('location.href', window.location.href); 
window.location.hfef = 'google.com'


// Q123: properties for window.location
const {
    href,
    protocol,
    host,
    hostname,
    port,
    pathname,
    search, 
    hash
} = window.location


// Q124: get query string values
// example: get client code value from URL query string
const urlParams = new URLSearchParams(window.location.search)
const clientCode = urlParams.get('clientCode')


// Q125: check key exsits in object
let me = {
    name: 'chewzzz',
    age: 21
}
console.log('age' in me) // using 'in' operator
console.log(me.hasOwnProperty('age'))
console.log(me.name !== undefined) // true
console.log(me.nickName !== undefined) // false