const { MongoClient } = require('mongodb')

let dbConnection

const connectToDb = async (cb) => {
    // local mongodb 
    // connect dbs of name bookstore
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017/bookstore')
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