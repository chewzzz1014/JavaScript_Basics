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


