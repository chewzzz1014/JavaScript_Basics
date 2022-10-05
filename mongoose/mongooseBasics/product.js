const mongoose = require("mongoose")

// connect to mongo server & choose database to use (movieApp)
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true })
    .then(() => {
        console.log("connection open");
    })
    .catch((err) => {
        console.log(err);
    })



