const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/relationshipDB", { useNewUrlParser: true }).then(() => {
    console.log(('Mongo connection open'));
}).catch(err => {
    console.log("Mongo connection error");
    console.log(err);
})

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    address: [
        {
            // prevent mongoose from creating id for address
            _id: { id: false },
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
})

const User = mongoose.model("User", userSchema);

const makeUser = async () => {
    const u = new User({
        first: "Harry",
        last: "Potter",
    })

    u.address.push({
        street: "123 Sesame Street",
        city: "New York",
        state: "NYC",
        country: "USA"
    })

    const res = await u.save();

    console.log(res);
}

// add address to existing user
const addAddress = async (id) => {
    const user = await User.findById(id);
    user.address.push({
        street: "13/2 Jalan Gemilang",
        city: "Kuala Lumpur",
        state: "KL",
        country: "Malaysia"
    });
    const res = await user.save();
    console.log(res);
}

makeUser();