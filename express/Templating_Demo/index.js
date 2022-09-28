const express = require("express");
const path = require("path");
const app = express();

// set view engine. Do not need to require it since express will do it for us
app.set("view engine", "ejs");
// set absolute path where views folder located (so that can execute index.js outside this dir)
app.set("views", path.join(__dirname, "/views"));

// ejs look for html files in folder views
app.get("/", (req, res)=>{
  // render home.ejs
  res.render("home");
})

app.get("/rand", (req, res)=>{
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random", {rand: num});
});

app.listen(3000, ()=>{
  console.log("Listening on Port 3000");
})
