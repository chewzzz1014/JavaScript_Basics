const mongoose = require("mongoose")

// connect to mongo server & choose database to use (movieApp)
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true })
    .then(() => {
        console.log("connection open");
    })
    .catch((err) => {
        console.log(err);
    })


// degine schema
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: Number
})

// create a model from the created schema 
// Movie is a class
// collection name is movies
const Movie = mongoose.model("Movie", movieSchema);

// make new instance of movie
const burning = new Movie({ title: "Burning", year: 2017, score: 9.6, rating: 9.9 });


