const Fruit = require('../models/fruit.js')

const index = async(req, res) => {
    const allFruits = await Fruit.find()
    res.render('fruits/index.ejs', {fruits: allFruits})
}
const home = ('/',(req,res) => {
    res.render('index.ejs')
})

const newForm = (req, res) => {
    res.render('fruits/new.ejs')
}
const show = async (req, res) => {
    const foundFruit = await Fruit.findById(req.params.fruitId)
    res.render('fruits/show.ejs',{fruit: foundFruit})
}

const destroy = async(req, res)=>{
    await Fruit.findByIdAndDelete(req.params.fruitId)
    res.redirect('/fruits')
}

const create = async (req, res) => {
    if(req.body.isReadyToEat === 'on'){
        req.body.isReadyToEat = true
    } else {
        req.body.isReadyToEat = false
    }
    await Fruit.create(req.body)
    res.redirect('/fruits/new')
}

module.exports = {
    index,
    home,
    show,
    destroy,
    create,
    newForm,
}