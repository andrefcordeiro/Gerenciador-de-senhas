const mongoose = require('mongoose')

const PasswordSchema = new mongoose.Schema({
    site: String,
    email: String,
    password: String
})


module.exports  = mongoose.model('Password', PasswordSchema)