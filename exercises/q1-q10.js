// Q1: Ways to create object

// object constructor
const obj1 = new Object()

// create new object by passing prototype object as param
const obj2 = Object.create(null)

// object literal
const obj3 = {}

// class
class Person {
    constructor(name) {
        this.name = name
    }
}
const obj4 = new Person('chewzzz')


// Q2: What's prototype chain
// build new types of object based on existing ones (similar to inheritance)
// prototype on object instace: Object.getPrototypeOf(object)
// prototype on constructor function: Object.prototype


// Q3: Diff between Call, Apply, Bind
const employee1 = {
    firstName: 'New',
    lastName: 'Jeans'
}
const employee2 = {
    firstName: 'The',
    lastName: 'Cat'
}

function invite(g1, g2) {
    console.log(`${g1} ${this.firstName} ${this.lastName}, ${g2}`)
}

// call: call(`this` that the function referring to, arg1, arg2...)
invite.call(employee1, 'Hello', 'Yooo') // Hello New Jeans, Yooo
invite.call(employee2, 'Hello', 'Yooo') // Hello The Cat, Yooo

// apply: apply(`this` that the function referring to, [arg1, arg2...])
invite.apply(employee1, ['Hello', 'How are you?']) // Hello New Jeans, Yooo
invite.apply(employee2, ['Hello', 'How are you?']) // Hello The Cat, Yooo

// bind: bind(`this` that the function referring to)
const inviteE1 = invite.bind(employee1)
const inviteE2 = invite.bind(employee2)


// Q4: What's JSON and its common operations?
JSON.parse('{"name": "chewzzz"}') // JSON -> JS Object
JSON.stringify(obj4) // object -> JSON


// Q5: Purpose of array's slice method?
// create copy/substring of array
// arr.slice(startIdx, [endIdx (exclusive)])
const arr = [1, 2, 3, 4, 5]
console.log(arr.slice(2, 4)) // [3, 4]

// Q6: Purpose of array's splice method?
// delete and insert elements at once (will mutate the original array). Return deleted array
// arr.splice(startIdx, [numEle to delete], [element inserted], [element inserted]...)
console.log(arr.splice(0, 0, 0.5, 0.6, 0.7)) // []


// Q7: Diff between slice and splice
// slice is immutable; splice is mutable
// slice returns subset of array; splice return an array of elements deleted


// Q8: How to compare Object and Map?
/**
 * 1. The key for Object can only be string or symbol. For key of map, it can be anything.
 *
 * 2. Keys in Map are ordered. Object are not
 *
 * 3. Can get size of map using size() method. For object, need to count manually.
 *
 * 4. Map is iterable
 *
 * 5. Object has prototype.
 *
 * 6. Map performs better for frequent addition and removal of key pairs
 */


// Q9: Diff bet. == and ===
// == compares by value and can be diff data types
// === only compares values of same types
// 0 === -1
// NaN !=== NaN
// null !== undefined; null == undefined


// Q10: What're lambda or arrow functions
// shorted syntax of function expression
// doesnt have `this`, `arguments`, `super`, `new.target`