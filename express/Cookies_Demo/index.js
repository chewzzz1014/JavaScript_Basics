const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

// secret used for signing cookie
app.use(cookieParser("thisismysecret"));

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

    res.send("OK! Sent cookie.")
})

app.get("/getsignedcookie", (req, res) => {
    // sign a cookie
    res.cookie("fruit", "grape", { signed: true })
    res.send("Sent signed cookie!")
})

app.get("/verifyfruit", (req, res) => {
    // signed cookie is not shown
    console.log(req.cookies);

    // show signed cookie only
    res.send(req.signedCookies)
})

app.listen(3000, () => {
    console.log("Listening at Port 3000")
})