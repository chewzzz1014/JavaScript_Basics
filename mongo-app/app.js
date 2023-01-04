const { ObjectID } = require('mongodb')
const express = require('express')
const { connectToDb, getDb } = require('./db')
const app = express()

// database returned from connection
let db

// connect to db
connectToDb((e) => {
    if (!e) {
        db = getDb()
    }
})

app.get('/books', async (req, res) => {
    let allBooks = []
    try {
        await db.collection('books')
            .find()  // return cursor 
            .sort({ author: 1 })
            .forEach(b => allBooks.push(b))

        res.status(200).json({
            allBooks
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
})

app.get('/books/:id', async (req, res) => {
    const { id } = req.params
    try {
        const foundBook = await db.collection('books').findOne({ _id: ObjectID(id) })
        res.status(200).json({ foundBook })
    } catch (error) {
        res.status(500).json({ error })
    }
})

app.listen(3000, () => {
    console.log('Listening at Port 3000')
})