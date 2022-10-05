const { default: mongoose } = require("mongoose");

mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true })
    .then(() => {
        console.log("connection open");
    })
    .catch((err) => {
        console.log(err);
    })

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

// virtual: function that we didn't actually define in the database 
personSchema.virtual("fullName").
    get(function () {
        return `${this.first} ${this.last}`;
    });



const Person = mongoose.model("Person", personSchema);