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

app.get("/campgrounds", async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render("campgrounds/index", { campgrounds });
})
app.get("/campgrounds/new", (req, res) => {
    res.render("campgrounds/new");
})
app.get("/campgrounds/:id", async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id);
    res.render("campgrounds/show", { campground });
})
app.post("/campgrounds", async (req, res) => {
    const campground = new Campground(req.body.campground);
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`)
})
app.listen(3000, () => {
    console.log("Listening on Port 3000.");
})