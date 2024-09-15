const Fruit = require('../models/fruit.js')

const index = async(req, res) => {
    const allFruits = await Fruit.find()
    res.render('fruit/index.ejs', {fruits: allFruits})
}

module.exports = {
    index,
}