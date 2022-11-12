 // Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

 function sumAll(arr) {
  let n = arr.slice().sort((a, b)=> a-b );

  let sum = 0;
  for (let i=n[0]; i<=n[1]; i++)
      sum += i;
  return sum
}

sumAll([1, 4]);
