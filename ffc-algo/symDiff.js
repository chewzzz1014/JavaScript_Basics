function sym(...args) {
    return [...new Set(args.reduce(diff))]
  }
  
  const diff = (arr1, arr2) => {
    return [
      ...arr1.filter(ele => !arr2.includes(ele)),
      ...arr2.filter(ele => !arr1.includes(ele))
    ]
  }
  
  sym([1, 2, 3], [5, 2, 1, 4]);