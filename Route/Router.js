const express = require('express');
const Petmodel = require('../models/Pets.model')
const Usermodel = require('../models/Users.model')

const router = express.Router();



router.post('/login' , async (req,res)=>{
    let {email,password} = req.body;
     try {
       let data= await Usermodel.find({email:email,password:password});
       const token = jwt.sign({course : 'backend'}, 'masai');
  if(data.length>0){
    res.send('Login success' + token)
}else{
    res.send("email or password wrong");
    
  }

     } catch (error) {
        console.log(error);
        res.send("Check email or password");
     }
})

router.get('/signup',async (req,res)=>{
    let  data = await Usermodel.find();
    res.send(JSON.stringify(data));
})

router.post('/signup',async (req,res)=>{
    let payload = req.body;
     console.log(payload);
    try{
        const verify = await Usermodel.find({email: payload.email})
        if(verify.length==0){
            const data =  new Usermodel(payload);
            await data.save();
            res.send(data +   " Registered");
        }else{
            console.log("Already User Exist");
            res.send("Already USer Exist");
        }  
    } catch (error) {
        console.log(error);
        res.send("Try Regsiter Again");
    } 
})

router.get('/',async (req,res)=>{
let  data = await Petmodel.find();

    res.send(JSON.stringify(data));
})

module.exports = router;