const express = require("express")
const path = require("path")
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const comments = [
    {
        username: "Todd",
        comment: "hahahahah so funny"
    },
    {
        username: "PikachuMon",
        comment: "woof woof woof"
    },
    {
        username: "makimaSlave",
        comment: "can't wait for the anime"
    },
    {
        username: "Quincy",
        comment: "are you serious?..."
    },
    {
        username: "lolololBoi",
        comment: "hmmmmm don't think it worths the time"
    }
];


app.get("/comments", (req, res) => {
    res.render("comments/index", { comments })
})

// display form
app.get("/comments/new", (req, res) => {
    res.render("comments/new");
})

// POST request after submitted the form
app.post("/comments", (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment })
    // redirect to comments
    res.redirect("/comments");
})

app.get("/tacos", (req, res) => {
    res.send("GET /tacos response");
})

app.post('/tacos', (req, res) => {
    const { username, age } = req.body;
    res.send(`OK, got it! You're ${username} and ${age} years old.`);
})

app.listen(3000, () => {
    console.log("Listening at Port 3000.");
})