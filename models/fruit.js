const mongoose = require('mongoose')

// create schema
const fruitSchema = new mongoose.Schema ({
    name: String,
    isReadyToEat: Boolean,
})

// link schema to model
const Fruit = mongoose.model('Fruit', fruitSchema)

// export the model
module.exports = Fruit