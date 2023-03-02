const express = require('express');
const Usermodel = require('../models/Users.model');

const userRoute = express.Router();


userRoute.get('/getuser/:id',async(req,res)=>{
   const id = req.params.id;

   try {
      const user = await Usermodel.findById(id);
      if(user){
        res.send(user);
      }
      else{
        res.send("not found");
      }
   } catch (error) {
    res.send(error);
   }
})
 
userRoute.put("/update/:id",async (req,res)=>{
    const id =req.params.id;
    const {currentUserId , currentUserAdminStatus,password} = req.body

    if(id=== currentUserId || currentUserAdminStatus){
        try {
          
            const user = await Usermodel.findByIdAndUpdate(id,req.body,{new:true})
         res.send(user);
        } catch (error) {
            res.send(error);
        }

    }else{
        res.send( "You can update only your profile")
    }
})

userRoute.delete("/delete/:id",async (req,res)=>{
    const id =req.params.id;
    const {currentUserId,currentUserAdminStatus} = req.body;

    if(currentUserId ===id  || currentUserAdminStatus){
        try {
            await Usermodel.findByIdAndDelete(id);
            res.send("User deleted Successfully")
            
        } catch (error) {
            res.send(error);
        }
    }else{
        res.send( "You can only Delete your profile")
    }
})

userRoute.put('/follow/:id', async (req,res)=>{
    const id = req.params.id;

    const {currentUserId} = req.body;

    if(currentUserId===id){
        res.send("Action forbidden");
    }else{
        try {
            const followUser = await Usermodel.findById(id);
            const following = await Usermodel.findById(currentUserId);
  
              if(!followUser.followers.includes(currentUserId)){
                await followUser.updateOne({$push : {followers : currentUserId} })
                await following.updateOne({$push : {following : id} })
                res.send("User Followed");
              }else{
                res.send("user already followed")
              }

        } catch (error) {
            res.send(error)
        }
    }
})


userRoute.put('/unfollow/:id', async (req,res)=>{
    const id = req.params.id;

    const {currentUserId} = req.body;

    if(currentUserId===id){
        res.send("Action forbidden");
    }else{
        try {
            const followUser = await Usermodel.findById(id);
            const following = await Usermodel.findById(currentUserId);
  
              if(followUser.followers.includes(currentUserId)){
                await followUser.updateOne({$pull : {followers : currentUserId} })
                await following.updateOne({$pull : {following : id} })
                res.send("User UnFollowed");
              }else{
                res.send("user is not followed by you")
              }

        } catch (error) {
            res.send(error)
        }
    }
})



module.exports = userRoute