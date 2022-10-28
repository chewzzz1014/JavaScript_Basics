const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());

app.get("/greet", (req, res) => {
    // grab what's inside the cookie
    const { name, animal } = req.cookies;
    //console.log(req.cookies)

    res.send("Hey there")
})

app.get("/setname", (req, res) => {
    // send cookie, not part of response
    res.cookie("name", "chewzzz")
    res.cookie("animal", "dog")

    res.send("OK!")
})

app.listen(3000, () => {
    console.log("Listening at Port 3000")
})