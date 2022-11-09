// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
function mutation(arr) {
   return arr[1]
    .toLowerCase()
    .split("")
    .every((ele) => {
      return arr[0].toLowerCase().indexOf(ele) !== -1;
    });
}

mutation(["hello", "hey"]);
