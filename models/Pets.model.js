const mongoose = require('mongoose');


let petSchema = mongoose.Schema({
    "id" : Number,
    "img":  String,
    "name":String,
    "Status" : String,
    "Species" : String,
    "Breed" : String,
    "Color" :String,
    "age":String,
    "about":String
  })


  let Petmodel = mongoose.model('pets',petSchema);


  module.exports = Petmodel;