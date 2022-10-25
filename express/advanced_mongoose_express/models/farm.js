const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/relationshipDB", { useNewUrlParser: true }).then(() => {
    console.log(('Mongo connection open'));
}).catch(err => {
    console.log("Mongo connection error");
    console.log(err);
})


// one to many relationship. 
// store data seperately but store references to document ID's somewhere inside the parent (store reference of child to parent)

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ["Spring", "Summer", "Autumn", "Winter"]
    }
});

const Product = mongoose.model("Product", productSchema);

// Product.insertMany([
//     { name: "Goddess Melon", price: 50.99, season: "Summer" },
//     { name: "Suhar Baby Watermelon", price: 70.99, season: "Summer" },
//     { name: "Asparagus", price: 5.99, season: "Spring" },
// ]);


const farmSchema = new mongoose.Schema({
    name: String,
    city: String,
    // products is an array of ObjectId from Product model
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }]
});
const Farm = mongoose.model("Farm", farmSchema);

const makeFarm = async () => {
    const farm = new Farm({ name: "Farm Fresh UPM", city: "Seri Kembangan, Selangor" });
    const product = await Product.findOne({ name: "Goddess Melon" });

    // it actually store the ObjectId product only
    farm.products.push(product);
    await farm.save();
    console.log(farm);
}
// makeFarm();

const addProduct = async () => {
    const farm = await Farm.findOne({ name: "Farm Fresh UPM" });
    const product = await Product.findOne({ name: "Asparagus" });
    farm.products.push(product);
    await farm.save();
    console.log(farm);
}

// addProduct();

Farm.findOne({ name: "Farm Fresh UPM" })
    .populate("products")   // show products info instead of their id 
    .then(farm => console.log(farm));


