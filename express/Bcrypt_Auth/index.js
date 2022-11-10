const express = require('express')
const session = require("express-session")
const mongoose = require('mongoose')
const User = require('./models/user')
const path = require('path')
const bcrypt = require('bcrypt')

const app = express();

app.use(session({ secret: 'mysecret' }))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost:27017/authDemo', { useNewUrlParser: true })
    .then(() => {
        console.log("mongo connection open");
    })
    .catch((err) => {
        console.log(err);
    })

app.get('/', (req, res) => {
    res.send('HOME')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPw = await bcrypt.hash(password, 12)
    const user = new User({
        username: username,
        password: hashedPw
    })

    await user.save();
    req.session.user_id = user._id;
    res.redirect('/')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await User.findOne({ username: username })
    const is_valid_password = await bcrypt.compare(password, foundUser.password)
    if (is_valid_password) {
        // set user session
        req.session.user_id = foundUser._id

        res.redirect('/secret')
    } else {
        res.redirect('/login')
    }
})

app.get('/secret', (req, res) => {
    // if user is logged in
    if (!req.session.user_id) {
        res.redirect("/login")
    }
    res.send('This is a secret! For authenticated user only huhuhu')
})

app.listen(3000, () => {
    console.log('Listening at Port 3000')
})