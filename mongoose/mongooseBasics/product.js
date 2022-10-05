const mongoose = require("mongoose")

// connect to mongo server & choose database to use (movieApp)
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true })
    .then(() => {
        console.log("connection open");
    })
    .catch((err) => {
        console.log(err);
    })


// Schema validation
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

// create a model 
const Product = mongoose.model("Product", productSchema);

// create instance of Product
const bike = new Product({ name: "Mountain Bike", price: 500 });

// save 
bike.save()
    .then(data => {
        console.log("We got...");
        console.log(data);
    })
    .catch(err => {
        console.log("We got error!");
        console.log(err);
    })

