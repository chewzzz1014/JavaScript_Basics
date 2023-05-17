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