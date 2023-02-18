// Q11: First class function?
// functions are treated like variable/value
// eg: can be passed as params, return as value, assign to value...
const clickHandler = () => console.log('Click!')
document.addEventListener('click', clickHandler)


// Q12: First order function?
// function that does not accept another function as arg nor return function as value


// Q13: Higher order function?
// functions that accept another function as arg or return function as value
const higherOrderFunc = (lowerOrderfunc) => lowerOrderfunc()
higherOrderFunc(clickHandler)


// Q14: Unary function
const unaryFunc = (a) => typeof a === 'number' ? 'Correct!' : 'Wrong!'


// Q15: Currying function?
// process of taking a function with multipel args and turning it into a sequence of function each with only one arg
// turn n-ary function into unary function
const mulArgsFunc = (a, b, c) => a + b + c
console.log(mulArgsFunc(1, 2, 3)) // normal function call

const curryFunc = a => b => c => console.log(a + b + c)
curryFunc(1) // return function b => c => 1+b+c
curryFunc(1)(2) // return function c=> 3+c
curryFunc(1)(2)(3) // return 6


// Q16: Pure function?
// function where return value is determined by args w/o any side effect
// eg: call a function with the same arguments 'n' number of times and 'n' number of places will always return the same value.


// Q17: Purpose of let keyword?
// declare block scope varible


// Q18: Diff of let and var?
/**
 * 1. Let is block scope. Var is function scope.
 * 2. Let can't be hoisted. Var can be hoisted.
 */


// Q19: Reason to choose the name let as a keyword?
// let is a mathematical statement that was adopted by early programming languages like Scheme and Basic.It has been borrowed from dozens of other languages that use let already as a traditional keyword as close to var as possible


// Q20: How to reclare variable in switch block w/o error?
// can't declare any variable inside case of switch block!!
// create nested block inside case clause to create new block scoped lexical environment:
let count = 1
switch (x) {
    case 0: {
        let name // declare inside nested block!
        break
    }
    case 1: {
        let name
        break
    }
}