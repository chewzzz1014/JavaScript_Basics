// Input:
// 102, 1948948 and 1.3 and 4.5
// Output:
// 102
// 1948948
// 1
// 3
// 4
// 5


function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */


    /*
     * Do not remove the return statement
     */
    let re = /\d{1,}/g;
    return re;
}
