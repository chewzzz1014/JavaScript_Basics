const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username cannot be blank'],
    },
    password: {
        type: String,
        required: [true, 'Password cannot be blank']
    }
})

// add method to user class
userSchema.statics.findAndValidate = async function (username, password) {

    // this refers to userShcema
    const foundUser = await this.findOne({ username: username })
    const is_valid_password = await bcrypt.compare(password, foundUser.password)
    return (is_valid_password) ? foundUser : false
}

// run this before save an instance of User
userSchema.pre('save', async function (next) {
    // if the password is not been modified
    if (!this.isModified('password'))
        return next()

    this.password = await bcrypt.hash(this.password, 12)
    // next() is save()
    next();
})

module.exports = mongoose.model('User', userSchema)