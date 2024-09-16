const User = require('../models/user.js')
const bcrypt = require('bcrypt')

const signUpForm = (req, res) => {
    res.render('auth/sign-up.ejs')
}

const createUser = async(req, res)=>{
    const userInDatabase = await User.findOne({username: req.body.username})
    if(userInDatabase){
        return res.send('the username is already taken, please use a different username')
    
    } 
    if(req.body.password !== req.body.confirmPassword){
        return res.send('Password did not match, please try it again')
    } 
    const passwordHashed = bcrypt.hashSync(req.body.password, 10)
    req.body.password = passwordHashed
    await User.create(req.body)
    res.send('form Submission accepted')
}

const signInForm = (req, res)=>{
    res.render('auth/sign-in.ejs')
}

const signInUser = async(req, res) => {
    const userInDatabase = await User.findOne({username: req.body.username})
    if(!userInDatabase){
        return res.send('Failed to login, please try it again') 
    }
    const validPassword = bcrypt.compareSync(req.body.password, userInDatabase.password)
    if (!validPassword){
        return res.send('login failed please try it again')
    }else {return res.send('you are in')}

}


module.exports = {
    signUpForm,
    createUser,
    signInForm,
    signInUser,

}