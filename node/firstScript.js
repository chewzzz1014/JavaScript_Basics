console.log("This is args file");

// print process.arg using node
console.log(process.argv);

// Output:
// ['C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\USER\\JavaScript_Basics\\node\\firstScript.js'
// ]


// after executed with command: node wow haha lol (wow, haha, lol passed as arguments)

// Output:
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\USER\\JavaScript_Basics\\node\\firstScript.js',
//   'wow',
//   'haha',
//   'lol'
// ]

// manipulate with arguments passed
const args = process.argv.slice(2);   // first and second arguments are node path and file path
for (let e of args)
  console.log(`We got ${e}!`);

  // Output for : "node firstScript.js wow haha lol"
  // We got wow!
  // We got haha!
  // We got lol!
