const { ObjectId } = require('mongodb')
const express = require('express')
const { connectToDb, getDb } = require('./db')
const app = express()

// database returned from connection
let db

app.use(express.json())

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

        res.status(200).json(allBooks)
    } catch (error) {
        res.status(500).json(error)
    }
})

app.get('/books/:id', async (req, res) => {
    const { id } = req.params
    if (ObjectId.isValid(id)) {
        try {
            const foundBook = await db.collection('books').findOne({ _id: ObjectId(id) })
            if (!foundBook)
                res.status(404).json('Document Not Found')
            else
                res.status(200).json(foundBook)
        } catch (error) {
            res.status(400).json(error)
        }
    } else {
        res.status(400).json('Invalid ID format')
    }
})

app.post('/books', async (req, res) => {
    const book = req.body

    try {
        const result = await db.collection('books').insertOne(book)
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
})

app.delete('/books/:id', async (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        try {
            const result = await db.collection('books').deleteOne({ _id: ObjectId(req.params.id) })
            res.status(200).json(result)

        } catch (error) {
            res.status(400).json(error)
        }
    } else {
        res.status(400).json('Invalid ID format')
    }
})

app.listen(3000, () => {
    console.log('Listening at Port 3000')
})