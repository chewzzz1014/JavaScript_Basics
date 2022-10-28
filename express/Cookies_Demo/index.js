const express = require("express");
const app = express();

app.get("/greet", (req, res) => {
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