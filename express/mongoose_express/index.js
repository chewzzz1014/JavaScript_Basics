const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const app = express();

// import mongoose model
const Product = require("./models/product");


// connect to mongo server & choose database to use (movieApp)
mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true })
    .then(() => {
        console.log("mongo connection open");
    })
    .catch((err) => {
        console.log(err);
    })

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
// app.use(express.static(path.join(__dirname, "/public")));

// display form
app.get("/products/new", (req, res) => {
    res.render("products/new");
})

app.get("/products", async (req, res) => {
    const products = await Product.find({})
    res.render("products/index", { products });
})

app.post("/products", async (req, res) => {
    const n = new Product(req.body)
    await n.save();
    console.log(n);
    res.redirect(`/products/${n._id}`);
})

app.get("/products/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/show", { product });
})

app.get("/products/:id/edit", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/edit", { product })
})

app.put("/products/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${product._id}`);
})

app.listen(3000, () => {
    console.log("Listening on Port 3000");
});