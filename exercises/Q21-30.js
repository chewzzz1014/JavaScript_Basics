// Q21: Temporal Dead Zone
// behavior when acessing a let or const variable before its declaration that results Reference


// Q22: IIFE(Immediately Invoked Function Expression)
// function that runs as soon as it's defined
(function () {
    let msg = 'Hello World'
    console.log(msg)
})()


// Q23: Benefits of using modules
// maintainability, reusability, namespacing


// Q24: Memoization
// technique to increase function's performace by caching its previously computed results
// when memoized function is called, its params are used to index the cache. If data presents, it can be returned w/o executing entire function
const memoizedAddition = () => {
    let cache = {}

    return (value) => {
        if (value in cache) {
            console.log('Fetching from cache...')
            return cache[value]
        } else {
            console.log('Calculating result...')
            cache[value] = value + 20
            return cache[value]
        }
    }
}

// addtion is the returned function
const addition = memoizedAddition()
console.log(addition(20))
console.log(addition(20))
/**
    Calculating result...
    40
    Fetching from cache...
    40
 */


// Q25: Hoisting
// use variables before they are used
// only hoists declaration, not initialisation
console.log(h1) // undefined (can't hoist initialisation)
var h1 = 'yoyoyoyyoyo'


// Q26: Classes in ES6
// syntactic sugar over JavaScript's existing prototype-based inheritance
class Bike {
    constructor(color, model) {
        this.color = color
        this.model = model
    }

    getDetails() {
        return `${this.model} bike has ${this.color} color.`
    }
}


// Q27: Closures