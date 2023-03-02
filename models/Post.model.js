const mongoose =require('mongoose');

const postSchema = mongoose.Schema({
    userId : {type :String , required :true},
    desc :String,
    likes : [],
    imgage: String
},
{
    timestamps :true
}
)

const Postmodel = mongoose.model('posts', postSchema);


module.exports =Postmodel;