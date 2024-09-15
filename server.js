// ==============require pacakges ================== //

require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const methodOverride = require('method-override')
const fruitsCtrl = require('./controllers/fruits.js')
const authCtrl = require('./controllers/auth.js')

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
app.use('/public', express.static('public'))

// ================Fruts routers ===================== //

app.get('/', fruitsCtrl.home)
app.get('/fruits', fruitsCtrl.index)
app.get('/fruits/new', fruitsCtrl.newForm)
app.get('/fruits/:fruitId', fruitsCtrl.show)
app.delete('/fruits/:fruitId', fruitsCtrl.destroy) 
app.post ('/fruits', fruitsCtrl.create)

// ================ auth router ====================== //

app.get('/auth/sign-up', authCtrl.signUpForm)
app.post('/auth/sign-up', authCtrl.createUser)



app.listen(3002)