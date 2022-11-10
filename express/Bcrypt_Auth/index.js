const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/user')
const path = require('path')
const bcrypt = require('bcrypt')

const app = express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

mongoose.connect('mongodb://localhost:27017/authDemo', { useNewUrlParser: true })
    .then(() => {
        console.log("mongo connection open");
    })
    .catch((err) => {
        console.log(err);
    })

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/secret', (req, res) => {
    res.send('This is a secret!')
})

app.listen(3000, () => {
    console.log('Listening at Port 3000')
})