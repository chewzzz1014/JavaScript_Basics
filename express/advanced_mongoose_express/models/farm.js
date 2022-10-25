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




