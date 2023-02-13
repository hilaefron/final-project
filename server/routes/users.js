const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const router = express.Router()
const Joi = require('joi')
// const auth = require("../middlewares/auth");

//GET ALL USERS 
router.get('/' ,async (req,res)=>{
    const users = await User.find().sort('name');
    res.send(users);
});


//GET USER BY ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});





//ADD NEW USER 
router.post('/', async (req,res)=>{
  const {error}=validateUser(req.body);
    if(error){
        // bad REQUEST 400
        res.status(400).send(error.details[0].message)
        return
    }
    let user= await User.findOne({email:req.body.email})
    if(user) return res.status(400).send('User already exsist')

    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        order: req.body.order
    });
    const salt = await bcrypt.genSalt(10);
     user.password=await bcrypt .hash(user.password,salt)
        try{
            user = await user.save()
        }
        catch(error){
            res.status(500).send('something went wrong')
        }
     
        res.header('x-auth-token',user.generateJWT())
        .header('access-control-expose-headers','x-auth-token')//מחלץ את הטורן שהגדרנו בבאק האנד לפרונט האנד
        .send({user});
});


//EDIT USER (add or delete from order)
router.put('/:id', function (req, res) {
  User.findById(req.params.id, function (error, user) {
    if (error) {
      res.status(500).send(error);
    } else {
      let object = req.body;
      console.log(req.body)
      console.log(req.budjetValue)
      if (user.order && Array.isArray(user.order)) {
        let objectIndex = user.order.findIndex(obj => obj.body.name === object.body.name);
        if (objectIndex === -1) {
          user.order.push(object);
          user.save(function (error) {
            if (error) {
              res.status(500).send(error);
            } else {
              res.send(user);
            }
          });
        } else {
          user.order.splice(objectIndex, 1);
          user.save(function (error) {
            if (error) {
              res.status(500).send(error);
            } else {
              res.send(user);
            }
          });
        }
      } else {
        res.status(400).send('User order property is not an array');
      }
    }
    console.log(user.order)
  });
});


function validateUser(user){
  const schema={
      name:Joi.string().min(2).max(50).required(),
      email:Joi.string().min(4).max(255).required().email(),
      password:Joi.string().min(5).max(255).required()
  }
  return Joi.validate(user,schema)
}


module.exports = router ;