function titleCase(str) {
    return str[0].toUpperCase() + str.slice(1);
}

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const app = express();

// import mongoose model
const Product = require("./models/product");

const categories = ["fruit", "vegetable", "dairy"];

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
    res.render("products/new", { categories });
})

app.get("/products", async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category: category });
        res.render("products/index", { products, category: titleCase(category) });
    }
    else {
        const products = await Product.find({})
        res.render("products/index", { products, category: "All" });
    }
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
    res.render("products/edit", { product, categories })
})

app.put("/products/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${product._id}`);
})

app.delete("/products/:id", async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect("/products");
})

app.listen(3000, () => {
    console.log("Listening on Port 3000");
});