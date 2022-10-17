// import
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const Campground = require("./models/campground")
const methodOverride = require("method-override")
const ejsMate = require("ejs-mate");
const { nextTick } = require("process");
const catchAsync = require("./utils/catchAsync")
const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.use(express.urlencoded({ extended: true }))
// app.use(express.static(path.join(__dirname, "public")))
app.use(methodOverride("_method"))

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

app.get("/campgrounds", catchAsync(async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render("campgrounds/index", { campgrounds });
}))
app.get("/campgrounds/new", (req, res) => {
    res.render("campgrounds/new");
})
app.get("/campgrounds/:id", async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id);
    res.render("campgrounds/show", { campground });
})
app.post("/campgrounds", catchAsync(async (req, res, next) => {

    // catch asynchronous error
    const campground = new Campground(req.body.campground);
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`);
}))

app.get("/campgrounds/:id/edit", catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id);
    res.render("campgrounds/edit", { campground });
}))
app.put("/campgrounds/:id", catchAsync(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndUpdate(id, { ...req.body.campground })
    res.redirect(`/ campgrounds / ${id}`)
}))
app.delete("/campgrounds/:id", catchAsync(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect("/campgrounds");
}))

// error handler middleware
app.use((err, req, res) => {
    res.send("Something went wrong...")
})

app.listen(3000, () => {
    console.log("Listening on Port 3000.");
})