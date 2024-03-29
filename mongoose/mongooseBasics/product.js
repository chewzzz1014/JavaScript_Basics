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
        // minimum price and error message
        min: [0, "Price must be positive!!"]
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
    },
    size: {
        type: String,
        // must be any of the values in enum
        enum: ["S", "M", "L"]
    }
})

// add instance method
productSchema.methods.greet = function () {
    console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiii");
    console.log(`- from ${this.name}`);
}
productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    // promise-like thenable
    return this.save();
}
productSchema.methods.addCategories = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}

// static methods
productSchema.statics.fireSale = function () {
    // "this" refers to Product 
    return this.updateMany({}, { onSale: true, price: 0 })
}



// create a model 
const Product = mongoose.model("Product", productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: "Bike Helmet" });
    console.log(foundProduct);
    foundProduct.greet();
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
    await foundProduct.addCategories("Outdoors");
    console.log(foundProduct);
}


findProduct();
// calling static method
Product.fireSale().then(res => console.log(res));


// create instance of Product
const bike = new Product({ name: "Cycling Jersey", price: 28.50, categories: ["Cycling"], size: "XS" });

//save
bike.save()
    .then(data => {
        console.log("We got...");
        console.log(data);
    })
    .catch(err => {
        console.log("We got error!");
        console.log(err);
    })


// new: true so that it show the updated data
// by default, the inserted data will not follow schema validation. By setting "runValidators: true", the inserted value will follow the validation too.
Product.findOneAndUpdate({ name: "Tire Pump" }, { price: -10.99 }, { new: true, runValidators: true })
    .then(data => {
        console.log("We got...");
        console.log(data);
    })
    .catch(err => {
        console.log("We got error!");
        console.log(err);
    })

