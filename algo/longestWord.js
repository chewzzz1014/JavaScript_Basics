function findLongestWordLength(str) {
  return str.split(" ").reduce((a, ele)=>{
       return (ele.length > a)? ele.length: a
  }, 0)
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
