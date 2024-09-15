const Fruit = require('../models/fruit.js')

const index = async(req, res) => {
    const allFruits = await Fruit.find()
    res.render('fruits/index.ejs', {fruits: allFruits})
}
const home = ('/',(req,res) => {
    res.render('index.ejs')
})

// const create = async(req, res) => {
//     req.body.isReadyToEat = req.body.isReadyToEat === 'on'
//     await Fruit.create(req.body)
//     res.redirect('/fruits')
// }

module.exports = {
    index,
    home,
}