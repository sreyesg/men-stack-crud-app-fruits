require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

//DATABASE CONNECTION
mongoose.connect(process.env.MONGODB_URI)
// log connection status to terminal
mongoose.connection.on("connected", ()=> {
    console.log(`connected to MongoDB ${mongoose.connection.name}.`)
    // console.log(mongoose.connection)
})

    // require model
const Fruit = require('./models/fruit.js')

//landing page route
app.get('/', (req, res) => {
    res.render('index.ejs')
})

// create new route: it will send a form to user






app.listen(3000)