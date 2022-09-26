// make a folder with name "Project" that contains index.html, style.css and script.js

// use node module, fs

// declare
const fs = require("fs");
console.log(fs);

// not asynchrous
fs.mkdir("Project", {recursive: true}, (err) =>{
  console.log("In fs.mkdir callback...");  // 2
  if (err) throw err; // 3
})


console.log("After fs.mkdir callback..."); // 1



console.log("Before fs.mkdirSync"); // 1
fs.mkdirSync("Project2");  //2
console.log("After fs.mkdirSync");  // 3



// Output:
// After fs.mkdir callback...
// Before fs.mkdirSync
// After fs.mkdirSync
// In fs.mkdir callback...





///////////////////////////////////////////////////////

// folder with customized name
const folderName = process.argv[2] || "MyAltProject";

try{
fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/index.html`, "");
fs.writeFileSync(`${folderName}/style.css`, "");
fs.writeFileSync(`${folderName}/script.js`, "");
} catch(e){
  console.log(`Got ${e}`);
}

try{
  fs.writeFileSync("Project/hello_world.js", "console.log('Hiiii')");
  fs.writeFileSync("Project2/greet.js", "console.log('Hiiii')");
}catch(e){
  console.log(`Got ${e}`);
}
