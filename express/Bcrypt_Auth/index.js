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


const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect("/login")
    }
    next();
}

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

app.post('/logout', (req, res) => {
    // remove user session
    //req.session.user_id = null;

    // destroy the whole session (all properties in req.session)
    req.session.destroy();

    res.redirect("/login")
})

app.get('/secret', requireLogin, (req, res) => {
    res.render('secret')
})

app.get('/topsecret', requireLogin, (req, res) => {
    res.send('Top Secret')
})

app.listen(3000, () => {
    console.log('Listening at Port 3000')
})