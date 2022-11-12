// split words in sentence
function splitify(str) {
  return str.split(/\W/)
}

splitify("Hello World,I-am code");
splitify("Earth-is-our home")
splitify("This.is.a-sentence")


// replace non-word with spaces
function sentensify(str) {
  return str.split(/\W/).join(" ")
}

sentensify("May-the-force-be-with-you");
