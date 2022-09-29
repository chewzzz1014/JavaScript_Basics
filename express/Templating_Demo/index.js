const express = require("express");
const { get } = require("http");
const path = require("path");
const redditData = require("./data.json");

const app = express();
app.use(express.static(path.join(__dirname, "/public")));

// set view engine. Do not need to require it since express will do it for us
app.set("view engine", "ejs");
// set absolute path where views folder located (so that can execute index.js outside this dir)
app.set("views", path.join(__dirname, "/views"));

// ejs look for html files in folder views
app.get("/", (req, res) => {
  // render home.ejs
  res.render("home");
})


app.get("/cats", (req, res) => {
  const cats = ["Meow Meow", "Oyen", "Kucing", "Mimi", "Cutie"];
  res.render("cats", { cats })
})

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    res.render("subreddit", { ...data });
  } else {
    res.render("not_found", { subreddit })
  }

})

app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random", { num: num });
});

app.listen(3000, () => {
  console.log("Listening on Port 3000");
})
