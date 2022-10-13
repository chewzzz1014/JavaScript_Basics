const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const Campground = require("../models/campground")
const cities = require("./cities")
const { places, descriptors } = require("./seedHelpers")


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

// return random element in the array
const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    // delete all records
    await Campground.deleteMany();

    // generate 50 random campgrounds
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 30) + 10;
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: "https://source.unsplash.com/collection/483251",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel in ratione, sequi nisi laborum soluta tempore, omnis non rem modi eligendi earum, aliquam molestiae? Officiis quis quaerat aperiam iure fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facere iste vel at numquam ratione minus, sint quae quam aliquid pariatur optio nisi quidem possimus beatae quos voluptas dolorem officia.",
            price: price
        })
        await camp.save();
    }
}
seedDB().then(() => {
    mongoose.connection.close();
})