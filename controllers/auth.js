const User = require('../models/user.js')

const signUpForm = (req, res) => {
    res.render('auth/sign-up.ejs')
}

const createUser = async(req, res)=>{
    const userInDatabase = await User.find({username: req.body.username})
    if(!userInDatabase){
        res.send('login failed, please try it again')
    } if(req.body.password !== req.body.confirmPassword){
        res.send('login failed, Please try it again')
    }
}




module.exports = {
    signUpForm,
    createUser,
}