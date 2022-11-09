// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
function titleCase(str) {
 return str.split(" ").map((ele)=> {
   return ele[0].toUpperCase() + ele.slice(1).toLowerCase()
 }).join(" ")
}

titleCase("I'm a little tea pot");
