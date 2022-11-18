// import
const mongoose = require("mongoose");
const express = require("express");
const session = require("express-session")
const flash = require("connect-flash")
const path = require("path");
const methodOverride = require("method-override")
const ejsMate = require("ejs-mate");
const { nextTick } = require("process");
const ExpressError = require("./utils/ExpressError");
const campgrounds = require("./routes/campgrounds")
const reviews = require("./routes/reviews")
const passport = require("passport")
const LocalStrategy = require("passport-local")
const User = require("./models/user")
const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))
app.use(methodOverride("_method"))

// for flash message
// session configuration: set up secret, change option mentioned in depreacated warning
const sessionConfig = {
    secret: "thisisasecret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        // expire after one week
        expires: Date.now() + 1000 * 60 * 60 * 24,
        maxAge: 1000 * 60 * 60 * 24
    }
}
app.use(session(sessionConfig))
app.use(flash())

// set up mongodb
mongoose.connect("mongodb://localhost:27017/yelp-camp", {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    //useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database Connected");
});

app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

// middleware that handles flash
app.use((req, res, next) => {
    // pass the flash message to the locals of res
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
})

app.get("/fakeUser", async (req, res) => {
    const user = new User({ email: "qwert@my.com", username: 'chewzzz' })
    const newUser = await User.register(user, '12345')
    res.send(newUser);
})

app.use("/campgrounds", campgrounds);
app.use("/campgrounds/:id/reviews", reviews);

app.get("/", (req, res) => {
    res.render("home")
})

app.all("*", (req, res, next) => {
    next(new ExpressError("Page not found", 404));
})

// error handler middleware
app.use((err, req, res, next) => {
    const { statusCode = 500, messsge = "Something went wrong" } = err;
    if (!err.messsge)
        err.messsge = 'Oh no. Something went wrong...';
    res.status(statusCode).render("error", { err });
})

app.listen(3000, () => {
    console.log("Listening on Port 3000.");
})