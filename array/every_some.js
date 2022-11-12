// every: works with arrays to check if every element passes a particular test.
function checkPositive(arr) {
  return arr.every((ele)=> ele>0)
}

checkPositive([1, 2, 3, -4, 5]);
