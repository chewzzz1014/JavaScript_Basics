// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

const pairs = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": "&apos;"
}

function convertHTML(str) {

  let r= str
          .replaceAll('&', pairs['&'])
          .replaceAll('<', pairs['<'])
          .replaceAll('>', pairs['>'])
          .replaceAll('"', pairs['"'])
          .replaceAll("'", pairs["'"])
  console.log(r)
  return r
}

convertHTML("Dolce & Gabbana");
