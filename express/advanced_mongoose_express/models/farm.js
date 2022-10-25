const mongoose = require("mongoose");
const Product = require("./product")
const Schema = mongoose.Schema;

// one to many relationship. 
// store data seperately but store references to document ID's somewhere inside the parent (store reference of child to parent)

const farmSchema = new Schema({
    name: {
        type: String,
        require: [true, "Farm must have name"]
    },
    city: {
        type: String
    },
    email: {
        type: String,
        required: [true, "Email required"]
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product"
        }
    ]
});

// delete also all products associate with the deleted farm
// using mongoose middleware
farmSchema.pre("findOneAndDelete", async function (data) {
    console.log("pre middleware");
})

farmSchema.post("findOneAndDelete", async function (farm) {
    // if the farm was deleted
    // delete all products that their ids are in farm.products
    if (farm.products.length) {
        const res = await Product.deleteMany({ _id: { $in: farm.products } });
        console.log(res);
    }
    console.log("post middleware");
    console.log(farm);
})

const Farm = mongoose.model("Farm", farmSchema);

module.exports = Farm;




