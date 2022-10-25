const mongoose = require("mongoose");
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

const Farm = mongoose.model("Farm", farmSchema);

module.exports = Farm;




