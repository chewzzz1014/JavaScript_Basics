const express = require("express");
const morgan = require("morgan");

const app = express();

// use morgan on every single request
app.use(morgan("tiny"));

// app.use((req, res, next) => {
//     console.log("My first middleware"); // 1
//     next();
//     console.log("My first middleware after calling next()");    // 3
// })
// app.use((req, res, next) => {
//     console.log("My second middleware");    // 2
//     next();
// })

app.use((req, res, next) => {
    // add requestTime to req.body
    req.requestTime = Date.now();
    console.log(`${req.method} : ${req.path}`);
    next();
})

app.use("/dogs", (req, res, next) => {
    console.log("Love Dogs!");
    next();
})

app.get("/", (req, res) => {
    console.log(`Request time: ${req.requestTime}`);
    res.send("HOME");
})
app.get("/dogs", (req, res) => {
    console.log(`Request time: ${req.requestTime}`);
    res.send("DOGS");
})

app.use((req, res) => {
    res.status(404).send("Not found");
})

app.listen(3000, () => {
    console.log("Running at Port 3000");
})