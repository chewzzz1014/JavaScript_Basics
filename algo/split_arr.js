//  splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
  let r = []
  for (let i=0; i<arr.length; i+=size){
    r.push(arr.slice(i, i+size))
  }
  return r
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
