const express = require('express');
const Postmodel = require('../models/Post.model');
const mongoose = require('mongoose');
const Usermodel = require('../models/Users.model')
const Postrouter = express.Router();

Postrouter.post('/create',async(req,res)=>{
    const newPost =new Postmodel(req.body)
    try {
        await newPost.save();
        res.send("Post created")
    } catch (error) {
        res.send(error);
    }
})

Postrouter.get('/',async(req,res)=>{
    try  {
    const newPost =await Postmodel.find()
       
        res.send(JSON.stringify(newPost))
    } catch (error) {
        res.send(error);
    }
})

Postrouter.get('/:id',async(req,res)=>{
const id  = req.params.id;
    try {
       const post = await Postmodel.findById(id);
       res.send(post)
    } catch (error) {
        res.send(error);
    }
})

Postrouter.put('/:id',async(req,res)=>{
    const id  = req.params.id;
    const {userId} = req.body
        try {
           const post = await Postmodel.findById(id);
           if(post.userId === userId){
           await post.updateOne({$set : req.body})
               res.send("post updated")
           }
           else{
            res.send("Action forbidden")
           }
        } catch (error) {
            res.send(error);
        }
    })

    Postrouter.delete('/:id',async(req,res)=>{
        const id  = req.params.id;
        const {userId} = req.body
            try {
               const post = await Postmodel.findById(id);
               if(post.userId === userId){
               await post.deleteOne()
                   res.send("post Deleted Success")
               }
               else{
                res.send("Action forbidden")
               }
            } catch (error) {
                res.send(error);
            }
        })


        Postrouter.post('/like/:id',async(req,res)=>{
            const id  = req.params.id;
            const {userId} = req.body
                try {
                   const post = await Postmodel.findById(id);
                   if(!post.likes.includes(userId)){
                   await post.updateOne({$push : {likes:userId}})
                       res.send("post Like Success")
                   }
                   else{
                    await post.updateOne({$pull : {likes:userId}})
                    res.send("post unLike Success")
                   }
                } catch (error) {
                    res.send(error);
                }
            })
    


Postrouter.get("/timeline/:id" , async(req,res)=>{
    const userId = req.params.id;
    try {
         const currentUserPosts =  await Postmodel.find({userId:userId})
         const followingPosts = await Usermodel.aggregate([
       {
        $match : {
            _id : new mongoose.Types.ObjectId(userId)
        }
       },{
        $lookup : {
            from :"posts",
            localField : "following" ,
            foreignField : "userId",
            as : "followingPosts" 
    }
       },{
        $project :{
            followingPosts :1 , 
            _id:0
        }
       }
      ])

      res.send(currentUserPosts.concat(...followingPosts[0].followingPosts))
  
   
        } catch (error) {
        res.send(error);
    }
})



module.exports = Postrouter;

