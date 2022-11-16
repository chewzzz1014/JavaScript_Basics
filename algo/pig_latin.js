// If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
// If a word begins with a vowel, just add way at the end.
function translatePigLatin(str) {

  // regex for consonant
  let cRegex = /^[^aeiou]+/i
  // regex for vowel
  let vRegex = /^[^aeiou]*[aeiou]/i

  if (cRegex.test(str)){
      let matched = str.match(cRegex)[0]
      return `${str.slice(matched.length)}${matched}ay`
  }
  else{
      return `${str}way`
  }
}

translatePigLatin("consonant");
