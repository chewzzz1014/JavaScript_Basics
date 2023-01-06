const { MongoClient } = require('mongodb')
require('dotenv').config()

let dbConnection

const connectToDb = async (cb) => {
    // local mongodb 
    // connect dbs of name bookstore
    try {
        const client = await MongoClient.connect(process.env.MONGO_URI)
        dbConnection = client.db()
        return cb()
    } catch (error) {
        console.log(error)

        return cb(error)
    }
}

const getDb = () => dbConnection

module.exports = {
    connectToDb,
    getDb
}