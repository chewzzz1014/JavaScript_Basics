// match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

const pairs = {
  'G': 'C',
  'C': 'G',
  'A': 'T',
  'T': 'A'
}

function pairElement(str) {
  return str.split("").map((ele)=>{
    return [ele, pairs[ele]]
  })
}

pairElement("GCG");
