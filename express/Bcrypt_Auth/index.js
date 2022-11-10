const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/user')
const path = require('path')
const bcrypt = require('bcrypt')

const app = express();

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
    res.redirect('/')
})

app.get('/secret', (req, res) => {
    res.send('This is a secret!')
})

app.listen(3000, () => {
    console.log('Listening at Port 3000')
})