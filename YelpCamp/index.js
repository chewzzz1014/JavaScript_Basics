// import
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const Campground = require("./models/campground")
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.use(express.urlencoded({ extended: true }))
// app.use(express.static(path.join(__dirname, "public")))

// set up mongodb
mongoose.connect("mongodb://localhost:27017/yelp-camp", {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database Connected");
});



app.get("/", (req, res) => {
    res.render("home")
})
app.get("/makecampground", async (req, res) => {
    const camp = new Campground({ title: "My Backyard" });
    await camp.save();
    res.send(camp);
})

app.listen(3000, () => {
    console.log("Listening on Port 3000.");
})