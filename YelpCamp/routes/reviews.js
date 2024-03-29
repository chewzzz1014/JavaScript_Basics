const express = require("express");
const { reviewSchema } = require("../schemas");
const catchAsync = require("../utils/catchAsync")
const Campground = require("../models/campground")
const Review = require("../models/review")
const ExpressError = require("../utils/ExpressError");

// by default will not pass params together with route
// mergeParams will merge params and route so that we can access them here
const router = express.Router({ mergeParams: true });


const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(ele => ele.message).join(",");
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
}

router.post("/", validateReview, catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    req.flash("success", "Successfully added a review!")
    res.redirect(`/campgrounds/${campground._id}`);
}))


router.delete("/:reviewId", catchAsync(async (req, res, next) => {

    const { id, reviewId } = req.params;

    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Successfully deleted review!")
    res.redirect(`/campgrounds/${id}`);
}))

module.exports = router;