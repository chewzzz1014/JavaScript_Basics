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
// 
