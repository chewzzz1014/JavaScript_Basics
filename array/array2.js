"use strict"

let styles = ["Jazz", "Blues"];
alert(styles);
styles.push("Rock-n-Roll");
alert(styles);

styles[(styles.length+1)/2-1] = "Classics";
alert(styles);
alert("Shifted First Value:"+styles.shift());
alert(styles);
styles.unshift("Rap","Reggae");
alert(styles);
/* Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll */


///////////////////////////////////////////////////////////////////////

function sumInput(){
  let sum = 0;
  let numbers = []
  let num = prompt("Enter a number: ");
  while ( (num ?? false) && isFinite(num) && num!=="") //stop when enter non-numeric input, empty string, as well as when user pressed cancel
     {numbers.push(+num);
      num = prompt("Enter a number: ");}

  for (let num of numbers)
    sum += num;

  return sum;
}

alert(`Sum of all numbers is ${sumInput()}`);


////////////////////////////////////////////////////////////////

//get the maximum sum of consecutive elements in an array. maximum sum must be positive integer >=0 

function getMaxSubSum(arr){

  let currentSum = 0;
  let maxSum = 0;

  for (let ele of arr){
    currentSum += ele;
    maxSum = Math.max(maxSum, currentSum);
    if (currentSum<0) currentSum = 0;
  }
  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
