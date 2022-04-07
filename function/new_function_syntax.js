// function that calculate the sum of a array. This function is declared using new Function syntax

let calcSumArr = new Function ("arr", "alert(`The sum is ${arr.reduce((sum, item)=>sum+=item, 0)}.`);");

calcSumArr([2,3,4,5,6,7]);
