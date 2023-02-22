const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    "email" :String,
    "name" : String,
    "age" : Number,
    "password" : String 
})


const Usermodel = mongoose.model('users',userSchema)


module.exports = Usermodel;
