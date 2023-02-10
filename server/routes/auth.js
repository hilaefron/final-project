const express= require('express');
const mongoose = require('mongoose')
const Joi= require('joi');
const router = express.Router();
const bcrypt = require('bcrypt');
const User=require('../models/user')
// const jwt=require("jsonwebtoken")

// LOGIN
router.post('/',async(req,res)=>{
    const {error}=validateUser(req.body);
    if(error){
        return res.status(400).send(error.details[0].message)
    }
    let user= await User.findOne({email:req.body.email})
    if(!user) return res.status(400).send('Invalid user')

    const validatePassword=await bcrypt.compare(req.body.password, user.password);
    console.log(validatePassword)

    if(validatePassword){
        const token= user.generateJWT();
        token?res.send(token):res.status(400).send('Invalid email or password')
    } else{
        res.status(400).send(validatePassword)
    }   
})

function validateUser(user){
    const schema={
        email: Joi.string().email().min(4).max(255).required().email(),
        password: Joi.string().min(5).max(255).required(),
    }
    return Joi.validate(user,schema)
}

module.exports = router