const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review");
const CampgroundSchema = new Schema({
    title: String,
    image: String,
    price: Number,
    description: String,
    location: String,
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review"
    }]
})


// doc is the item deleted
CampgroundSchema.post("findOneAndDelete", async function (doc) {
    // using the "doc" (deleted campground) we have, we can delete all the associated reviews using id from doc
    if (doc) {
        await Review.remove({
            _id: {
                $in: doc.reviews
            }
        })
    }
})

module.exports = mongoose.model("Campground", CampgroundSchema);