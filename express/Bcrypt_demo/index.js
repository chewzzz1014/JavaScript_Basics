// demo of using bcrypt package

const bcrypt = require("bcrypt")


// generate salt for randomness
// hash password with salt
const hashPassword = async (pw) => {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(pw, salt)
    console.log('Salt: ' + salt)
    console.log('Hashed Password: ' + hash)
}

hashPassword('12345');
