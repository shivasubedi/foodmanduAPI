const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    itemname:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    detail:{
        type:String,
    
    },
    item_category:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    cafe:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('item',itemSchema);