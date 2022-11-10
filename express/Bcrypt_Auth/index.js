const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/user')
const bcrypt = require('bcrypt')

const app = express();

app.listen(3000, () => {
    console.log('Listening at Port 3000')
})