// approach 1: looping and compare
function diffArray(arr1, arr2) {
  const newArr = [];
  arr1.forEach((ele)=>{
    if (arr2.indexOf(ele) === -1)
      newArr.push(ele)
  })

  arr2.forEach((ele)=>{
    if (arr1.indexOf(ele) === -1 && newArr.indexOf(ele)===-1)
      newArr.push(ele)
  })

  return newArr
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);



// apporach 2: find symmetrical diff
function diffArray(arr1, arr2) {
  const s1 = new Set()

    arr1.forEach((ele)=>{
        s1.add(ele)
    })

    arr2.forEach((ele)=>{
       if (s1.has(ele))
          s1.delete(ele)
        else
          s1.add(ele)
    })
    return Array.from(s1);
  }

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
