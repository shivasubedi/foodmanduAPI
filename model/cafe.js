const mongoose = require('mongoose');

let cafeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
    cafetype:{
        type:String,

    },
    deliveryhour:{
        type:String,
        required:true
    }

});
module.exports = mongoose.model('cafe',cafeSchema);