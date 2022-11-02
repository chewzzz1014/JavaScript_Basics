// import
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const methodOverride = require("method-override")
const ejsMate = require("ejs-mate");
const { nextTick } = require("process");
const ExpressError = require("./utils/ExpressError");
const campgrounds = require("./routes/campgrounds")
const reviews = require("./routes/reviews")
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


app.use("/campgrounds", campgrounds);
app.use("/campgrounds", reviews);

app.get("/", (req, res) => {
    res.render("home")
})

app.all("*", (req, res, next) => {
    next(new ExpressError("Page not found", 404));
})

// error handler middleware
app.use((err, req, res, next) => {
    const { statusCode = 500, messsge = "Something went wrong" } = err;
    if (!err.messsge)
        err.messsge = 'Oh no. Something went wrong...';
    res.status(statusCode).render("error", { err });
})

app.listen(3000, () => {
    console.log("Listening on Port 3000.");
})