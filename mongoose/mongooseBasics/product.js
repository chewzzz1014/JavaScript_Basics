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
        required: true,
        maxLength: 20
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: {
        // a string of number
        // boolean/number will be converted into string
        type: [String]
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }
})

// create a model 
const Product = mongoose.model("Product", productSchema);

// create instance of Product
const bike = new Product({ name: "Bike Helmet", price: 19.50, categories: ["Cycling", "Safety"], qty: { online: 10, inStore: 15 } });

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

