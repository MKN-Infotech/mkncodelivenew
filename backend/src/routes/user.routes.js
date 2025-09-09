const express = require('express');
const userModel = require('../models/user.model');

const router = express.Router()




router.post('/contact', (req,res)=>{
    const{name,email,message} = req.body
   const user = userModel.create({
      name:name,
     email:email,
     message:message
   })

   res.json({
    message:'user create successfully',
    user:user
   })
   console.log(req.body)
 
})



module.exports = router