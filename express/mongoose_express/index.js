const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();


// connect to mongo server & choose database to use (movieApp)
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true })
    .then(() => {
        console.log("mongo connection open");
    })
    .catch((err) => {
        console.log(err);
    })

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// app.use(express.static(path.join(__dirname, "/public")));

app.get("/home", (req, res) => {
    res.send("At home page");
})

app.listen(3000, () => {
    console.log("Listening on Port 3000");
});