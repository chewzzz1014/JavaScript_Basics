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

const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw)
    if (result)
        console.log('Successful! Logging you in...')
    else
        console.log('Incorrect password :(')
}

//hashPassword('12345');
login('12345', '$2b$10$bvMDNcclE6joaQ5YWZvKie8a2ejoa7FeOfjl.0yGD7f0JPDTrkcs6')
