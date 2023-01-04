const express = require('express')
const { connectToDb, getDb } = require('./db')
const app = express()

let db

// connect to db
connectToDb((e) => {
    if (!e) {
        db = getDb()
    }
})

app.get('/books', (req, res) => {
    res.json({
        msg: 'welcome to api'
    })
})

app.listen(3000, () => {
    console.log('Listening at Port 3000')
})