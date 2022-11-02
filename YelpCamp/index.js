// import
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const methodOverride = require("method-override")
const ejsMate = require("ejs-mate");
const { nextTick } = require("process");
const Review = require("./models/review");
const { campgroundSchema, reviewSchema } = require("./schemas");
const ExpressError = require("./utils/ExpressError");
const catchAsync = require("./utils/catchAsync")
// routes
const Campground = require("./models/campground")
// schema validators
const Joi = require("joi");
const campgrounds = require("./routes/campgrounds")
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

const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(ele => ele.message).join(",");
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
}

app.use("/campgrounds", campgrounds);

app.get("/", (req, res) => {
    res.render("home")
})

app.post("/campgrounds/:id/reviews", validateReview, catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`);
}))


app.delete("/campgrounds/:id/reviews/:reviewId", catchAsync(async (req, res, next) => {

    const { id, reviewId } = req.params;

    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/campgrounds/${id}`);
}))

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