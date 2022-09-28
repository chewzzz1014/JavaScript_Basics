const express = require("express");

const app = express();

// console.dir(app);


// run when there's any incoming request
// default params: req (request) and res (response)
//app.use((req, res)=>{
//  console.log("WE GOT A NEW REQUEST");
  // console.dir(req);

  //res.send("THIS IS THE RESPONSE!!!:");
  // res.send({color: "red"});
  //res.send("<h1>Welcome!!!</h1>");
//})

// respond to GET request
app.get("/", (req, res)=>{
  console.log("At home page");
  res.send("<h1>HOME</h1>");
});

// match thr pattern: r/ follwed by anything
app.get("/r/:subreddit", (req, res)=>{
  // req.params return params user entered in form of object
  const {subreddit} = req.params;
  res.send(`AT SUBREDDIT ${subreddit}`);
});

app.get("/r/:subreddit/:postId", (req, res)=>{
  const {subreddit, postId} = req.params;
  res.send(`AT SUBREDDIT '${subreddit}' AND POST WITH ID '${postId}'`);
});

app.get("/cats", (req, res)=>{
  console.log("CAT REQUEST");
  res.send("MEOW!!!");
});

app.get("/dogs", (req, res)=>{
  console.log("DOG REQUEST");
  res.send("WOOF!!!");
});
//GET request to everything
// app.get("*", (req, res)=>{
//   res.send("I dont know what do you mean")
// });

// get query
app.get("/search", (req, res) => {
const {q} = req.query;
if (!q) // empty query
    res.send("You did not specify search term...");
  res.send(`Searching '${q}'...`);
})

// respond to POST request
app.post("/cats", (req, res)=>{
  res.send("POST REQUEST TO /cats")
});

app.listen(3000, ()=>{
  console.log("LISTENING ON PORT 3000");
})
