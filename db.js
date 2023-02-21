const mongoose = require('mongoose');

let connect  = mongoose.connect('mongodb+srv://abhinav:abhinav@cluster0.drrca07.mongodb.net/pets?retryWrites=true&w=majority')


module.exports = connect;