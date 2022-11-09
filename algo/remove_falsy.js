// Remove all falsy values from an array. Return a new array; do not mutate the original array.
function bouncer(arr) {
  return arr.filter((ele)=> Boolean(ele) )
}

bouncer([7, "ate", "", false, 9]);
