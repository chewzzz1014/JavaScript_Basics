function repeatStringNumTimes(str, num) {
  if (num<0)
    return ''
  else{
    let r = ''
    for (let i=0; i<num; i++)
      r += str
    return r
  }
}

repeatStringNumTimes("abc", 3);
