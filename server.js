// require('dotenv').config()
const express = require('express')
const app = express()

//landing page route
app.get('/', (req, res) => {
    res.render('index')
})







app.listen(3000)