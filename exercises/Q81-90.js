// Q81: Global Variable
// variables that are available throughout the length of the code w/o scope


// Q82: Problem with global variable
// conflict of variable names of local and global scope


// Q83: NaN
// Non-a-Number: a value is not a legal number
console.log(Math.sqrt(-1)) // NaN


// Q84: isFinite
// determine whether a number is a finiste & legal number
// return false if the value is +infinity, -infinity or NaN
isFinite(Infinity) // false
isFinite(NaN) // false
isFinite(-Infinity)


// Q85: Event flow
// order in which event is received on the web page
// clicked an element nested in various other element => trigger click event for each of its parent elements => click reaches destination
// Types of event flow: Event Bubbling (bottom to top) and Event Capturing (top to bottom)

// Q86: Event bubbling
// Event propagation: event first trigger