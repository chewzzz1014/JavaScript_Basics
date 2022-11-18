//  takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

function uniteUnique(...arr) {
  let r = []
  arr.forEach((ele)=>{
      ele.forEach((ele)=>{
        if (!r.includes(ele))
          r.push(ele)
      })
  })

  return r
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
