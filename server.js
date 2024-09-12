// ==============require pacakges ================== //

require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const methodOverride = require('method-override')

// ================database ====================//

//DATABASE CONNECTION
mongoose.connect(process.env.MONGODB_URI)
// log connection status to terminal
mongoose.connection.on("connected", ()=> {
    console.log(`connected to MongoDB ${mongoose.connection.name}.`)
    // console.log(mongoose.connection)
})

// require model
const Fruit = require('./models/fruit.js')

// =================middleware ================= //

app.use(express.urlencoded({extended: false}))
app.use(methodOverride("_method"))
app.use(morgan("dev"))


// ================routers ===================== //
//landing page route
app.get('/', (req, res) => {
    res.render('index.ejs')
})

// index Fruits
app.get('/fruits', async (req,res) => {
    const allFruits = await Fruit.find() 
    // console.log(allFruits)
    res.render('fruits/index.ejs', {fruits: allFruits})
})


// create new route: it will send a form to user
app.get('/fruits/new', (req, res) => {
    res.render('fruits/new.ejs')
})

// create show route
app.get('/fruits/:fruitId', async (req, res) => {
    const foundFruit = await Fruit.findById(req.params.fruitId)
    res.render('fruits/show.ejs',{fruit: foundFruit})
})

app.post ('/fruits', async (req, res) => {
    if(req.body.isReadyToEat === 'on'){
        req.body.isReadyToEat = true
    } else {
        req.body.isReadyToEat = false
    }
    await Fruit.create(req.body)
    res.redirect('/fruits/new')
})



app.listen(3001)