const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/relationshipDB", { useNewUrlParser: true }).then(() => {
    console.log(('Mongo connection open'));
}).catch(err => {
    console.log("Mongo connection error");
    console.log(err);
})


// one to bajillions (>= thousands) relationship.
// store data seperately but store references to document ID's somewhere inside the child (store reference of parent to child)


const userSchema = new Schema({
    username: String,
    age: Number
})

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: "User" }
})

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

const makeTweets = async () => {
    // const u = new User({ username: "chewzzz", age: 20 });
    // const tweet1 = new Tweet({ text: "Hellllo", likes: 2 });

    const foundUser = await User.findOne({ username: "chewzzz" });
    const tweet2 = new Tweet({ text: "Second post!", likes: 1 });

    // associate user to tweet
    // tweet1.user = u;
    tweet2.user = foundUser;

    // await u.save();
    // await tweet1.save();
    await tweet2.save();
}

// makeTweets();


const findTweet = async () => {
    // use populate to show username instead of just user id
    // populate name of field (not the model)
    const foundUser = await Tweet.findOne({}).populate("user", "username");
    console.log(foundUser);
}

findTweet();

