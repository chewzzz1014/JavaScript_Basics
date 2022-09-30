const express = require("express")
const path = require("path")
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


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