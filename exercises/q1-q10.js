// Q1: Ways to create object

// object constructor
const obj1 = new Object()

// // create new object by passing prototype object as param
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

