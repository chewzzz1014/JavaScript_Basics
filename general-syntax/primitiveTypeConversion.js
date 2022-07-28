//numerical conversion

let numStr = " 234 "
let numStr1 = "this will not work"
let numStr2 = " 234z "
let numStr3 = undefined
let numStr4 = null
let numStr5 = true
let numStr6 = false

console.log(Number(numStr)) //234
console.log(Number(numStr1)) //NaN
console.log(Number(numStr2)) //NaN
console.log(Number(numStr3)) //NaN
console.log(Number(numStr4)) //0
console.log(Number(numStr5)) //1
console.log(Number(numStr6)) //0

 //string conversion

 let num = 234
 let bool = true

 console.log(String(num)) //"234"
 console.log(String(bool)) //"true"


 //boolean conversion
 let getFalse = [0, "", null, undefined, NaN]
//list of value that will be converted into false
//get true otherwise

getFalse.forEach( function(value) { console.log(Boolean(value)) })
