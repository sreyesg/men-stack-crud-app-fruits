const User = require('../models/user.js')
const bcrypt = require('bcrypt')

const signUpForm = (req, res) => {
    res.render('auth/sign-up.ejs')
}

const createUser = async(req, res)=>{
    const userInDatabase = await User.find({username: req.body.username})
    if(userInDatabase){
        return res.send('the username is already taken, please use a different username')
    
    } if(req.body.password !== req.body.confirmPassword){
        return res.send('Password did not match, please try it again')
    } 
    passwordHashed = bcrypt.hashSync(req.body.password, 10)
    req.body.password = passwordHashed
    await User.create(req.body)
    res.redirect('/auth/sign-up')
}




module.exports = {
    signUpForm,
    createUser,
}