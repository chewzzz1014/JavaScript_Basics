// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  let current = str.charCodeAt(0);
  let r = undefined

  str.split("").forEach((ele)=>{
        if (ele.charCodeAt(0) === current)
          current++;
        else
          r = String.fromCharCode(current)
      })
      return r

}

fearNotLetter("abce");
