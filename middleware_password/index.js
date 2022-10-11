const express = require("express");
const morgan = require("morgan");
const app = express();

// check if the password passed by user is correct (authentication)
const verifyPassword = function (req, res, next) {
    const { password } = req.query;

    // did not pass password
    if (!password) {
        res.send("Sorry you need a password");
    }

    // passed password
    else {
        if (password === "chickennugget") {
            next();
        }
        else {
            res.send("Incorrect Password!");
        }
    }

}

// middleware chaining
app.get("/secret", verifyPassword, (req, res) => {
    res.send("Secret: Earth is not flat");
})


app.listen(3000, () => {
    console.log("Listening at Port 3000");
})