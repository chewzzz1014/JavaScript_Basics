const express = require("express");
const catchAsync = require("../utils/catchAsync")
const ExpressError = require("../utils/ExpressError");
const Campground = require("../models/campground")
const Review = require("../models/review");
// schema validators
const Joi = require("joi");
// declared joi schema
const { campgroundSchema, reviewSchema } = require("../schemas");
const router = express.Router();


const validateCampground = (req, res, next) => {
    // pass validation schema
    const { error } = campgroundSchema.validate(req.body);
    // if there's error in validation
    if (error) {
        const msg = error.details.map(ele => ele.message).join(",");
        console.log(req.body.campground)
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
}

const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(ele => ele.message).join(",");
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
}

router.get("/", catchAsync(async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render("campgrounds/index", { campgrounds });
}))

router.get("/new", (req, res) => {
    res.render("campgrounds/new");
})

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id).populate("reviews");
    console.log(campground);
    res.render("campgrounds/show", { campground });
})

// vaidateCampground is executed first
router.post("/", validateCampground, catchAsync(async (req, res, next) => {
    // if (!req.body.campground)
    //     throw new ExpressError("Invalid Campground Data", 400);

    // catch asynchronous error
    const campground = new Campground(req.body.campground);
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`);
}))

router.get("/:id/edit", catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id);
    res.render("campgrounds/edit", { campground });
}))
router.put("/:id", validateCampground, catchAsync(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndUpdate(id, { ...req.body.campground })
    res.redirect(`/campgrounds/${id}`)
}))
router.delete("/:id", catchAsync(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect("/campgrounds");
}))



module.exports = router;