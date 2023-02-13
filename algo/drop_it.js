/*
    Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.


*/
function dropElements(arr, func) {
    let foundIdx
    let hasFound = false

    for (let i = 0; !hasFound && i < arr.length; i++) {
        if (func(arr[i])) {
            foundIdx = i
            hasFound = true
        }
    }

    return foundIdx || foundIdx == 0 ? arr.slice(foundIdx) : []
}

dropElements([1, 2, 3], function (n) { return n < 3; });