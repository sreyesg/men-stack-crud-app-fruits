const mongoose = require('mongoose')

// Schema
const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, require: true},
})

// Model
const User = mongoose.model('User', userSchema)

// export module
module.exports = User