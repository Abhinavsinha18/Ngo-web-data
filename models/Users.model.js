const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    "email" :String,
    "name" : String,
    "age" : Number,
    "isAdmin" :{
        type:Boolean,
        default :false
    },
    "profilePicture"  :String,
    "coverPicture"  :String,
    "about"  :String,
    "livesin"  :String,
    "workAt"  :String,
    "relationship"  :String,
    "password" : String, 
    "followers" : [],
    "following" : [],
},
{timestamps : true}
)


const Usermodel = mongoose.model('users',userSchema)


module.exports = Usermodel;
