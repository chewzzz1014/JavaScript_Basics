// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  // split words without space
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2')

  return str.toLowerCase().split(/(?:_| )+/).join("-")
}

spinalCase('This Is Spinal Tap');
