const express = require("express");
const morgan = require("morgan");

const app = express();

// use morgan on every single request
app.use(morgan("tiny"));

app.get("/", (req, res) => {
    res.send("HOME");
})
app.get("/dogs", (req, res) => {
    res.send("DOGS");
})
app.listen(3000, () => {
    console.log("Running at Port 3000");
})