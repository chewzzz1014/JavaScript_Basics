const express = require("express")
const path = require("path")
const app = express()
const { v4: uuid } = require("uuid");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const comments = [
    {
        id: uuid(),
        username: "Todd",
        comment: "hahahahah so funny"
    },
    {
        id: uuid(),
        username: "PikachuMon",
        comment: "woof woof woof"
    },
    {
        id: uuid(),
        username: "makimaSlave",
        comment: "can't wait for the anime"
    },
    {
        id: uuid(),
        username: "Quincy",
        comment: "are you serious?..."
    },
    {
        id: uuid(),
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
    comments.push({ username, comment, id: uuid() })
    // redirect to comments
    res.redirect("/comments");
})

app.get("/comments/:id", (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/show", { comment });
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