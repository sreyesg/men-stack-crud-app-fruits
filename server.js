require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('./models/fruit.js')

//database connection
mongoose.connect(process.env.MONGODB_URI)
// log connection status to terminal
mongoose.connection.on("connected", ()=> {
    console.log(`connected to MongoDB ${mongoose.name}.`)
    // console.log(mongoose.connection)
})

//landing page route
app.get('/', (req, res) => {
    res.render('index.ejs')
})







app.listen(3000)