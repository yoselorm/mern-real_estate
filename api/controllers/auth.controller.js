const User  = require("../models/user.model")
const bcrypt = require('bcrypt')

const signup = async (req,res,next) =>{
    const{username,email,password} = req.body


    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Please fill in all fields.' });
    }

   try {
    const existingUser = await User.findOne({email})
    if(existingUser){
        return res.status(400).json({
            message: 'Email already exists'
        })
    }

    const existingUsername = await User.findOne({username})
    if(existingUsername){
        return res.status(400).json({
            message:'Username has already been taken'
        })
    }

    const hashedPassword =await bcrypt.hash(password,10)

    const newUser = await User.create({
        username,
        email,
        password:hashedPassword
    })

    return res.status(201).json({
        message:'User succesfully created'
    })
    
   } catch (error) {
    // console.log(error);
    // res.status(500).json({
    //     message: 'Internal server error'
    // })    
    next(error)
   }
}


module.exports ={ signup}