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



