// import mongoose model
const Product = require("./models/product");
const mongoose = require("mongoose");


// connect to mongo server & choose database to use (movieApp)
mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true })
    .then(() => {
        console.log("mongo connection open");
    })
    .catch((err) => {
        console.log(err);
    })


// const p = new Product({
//     name: "Ruby Grapefruit",
//     price: 6.50,
//     category: "fruit"
// })

// p.save().then(p => {
//     console.log(p);
// }).catch(err => {
//     console.log("We got error");
//     console.log(err);
// })

const seedProducts = [
    {
        name: "Fairy Eggplant",
        price: 1.00,
        category: "vegetable"
    },
    {
        name: "Organic Goddess Melon",
        price: 4.99,
        category: "fruit"
    },
    {
        name: "Organic Mini Seedless Watermelon",
        price: 3.99,
        category: "fruit"
    },
    {
        name: "Organic Celery",
        price: 1.50,
        category: "vegetable"
    },
    {
        name: "Chocolate Whole Milk",
        price: 3.69,
        category: "dairy"
    }
];

Product.insertMany(seedProducts)
    .then(res => console.log(res))
    .catch(err => console.log(err))