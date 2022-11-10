// demo of using bcrypt package

const bcrypt = require("bcrypt")


// generate salt for randomness
// hash password with salt
const hashPassword = async () => {
    const salt = await bcrypt.genSalt(10)
    console.log(salt)
}

hashPassword();
