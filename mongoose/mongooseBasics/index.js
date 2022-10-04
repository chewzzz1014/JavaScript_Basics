const mongoose = require("mongoose")

// connect to mongo server & choose database to use (movieApp)
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true })
    .then(() => {
        console.log("connection open");
    })
    .catch((err) => {
        console.log(err);
    })


// main().catch(err => console.log(err));

// async function main() {
//     await mongoose.connect('mongodb://localhost:27017/movieApp');
//     console.log("YEAGGGG");
//     // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
// }


