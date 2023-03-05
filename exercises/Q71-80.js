// Q71: typeof
// to determine type of varible. Return the type in string


// Q72, Q73, Q74: null VS undefined
/**
 * null:
 *  - variable point to no object
 *  - type: object
 *  - primitive value
 *  - indicate absence of value for a variable
 *  - converted to 0 in primitive operations
 *
 * undefined:
 *  - variable has been declared but not yet assigned a value
 *  - type: undefined
 *  - primitive value
 *  - indicate absence of variable itself
 *  - converted to NaN while in primitive operations
 *
 */


// Q75: eval
// evaluate JS code represented as code
console.log(eval('1 + 2')) // 3


// Q76: window VS document
/**
 * window:
 *  - root level in webpage
 *  - window object is available implicitlt in page
 *  - example of method: alert(), confirm()
 * 
 * document:
 *  - direct child of window object (DOM)
 *  - access via window.document or document
 *  - example of method: getElementById, getElementByTagName, createElement
 */


// Q77: Access history
// window.object contains browser history
// load previous and back URLs in history using back() and next()
function goBack() {
    window.history.back()
}
function goForward() {
    window.history.forward()
}


// Q78: Detect modifier key
// getModifierState(): return boolean value that indicates whether the specified modiefier key is activated or not
// examples of modifier: CapsLock, ScrollLock, NumLock
function hasCapsLock(e) {
    let flag = e.getModifierState('CapsLock')
    flag ? console.log('CapsLock activated!') : console.log('CapsLock not activated')
}


// Q79: isNaN
// determine whether a value is an illegal number (Not a Number)
isNaN('Hello') // true
isNaN('100') // false 

// 