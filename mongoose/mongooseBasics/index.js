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
    rating: String
})

// create a model from the created schema 
// Movie is a class
// collection name is movies
const Movie = mongoose.model("Movie", movieSchema);

// make new instance of movie
const burning = new Movie({ title: "Burning", year: 2017, score: 9.6, rating: "R" });


// insert many will return promise
// work just like mongo 
Movie.insertMany([
    { title: "Amelia", year: 2001, score: 8.3, rating: "R" },
    { title: "Alien", year: 1979, score: 8.1, rating: "R" },
    { title: "The Iron Giant", year: 1999, score: 7.5, rating: "PG" },
    { title: "Stand by Me", year: 1986, score: 7.3, rating: "R" },
    { title: "Moonrise Kingdom", year: 2012, score: 7.3, rating: "PG-13" }
])
    .then(data => {
        console.log("INSERTED", data);
    });

// to load model to mongo and save changes to "burning"
// In node repl:
//  .load index.js
//  burning.save()
