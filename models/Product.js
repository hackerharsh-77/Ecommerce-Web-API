const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: true
    },
    desc:{
        type:String,
        require: true,
       
    },
    img:{
        type:String,
        require:false,
    },
    categories:{
        type:Array,
    },
    size:{  
        type:String,

    },
    color:{
        type:String,
    },
    price:{
        type:String,
        required: true
    },

},{timestamp:true});

module.exports = mongoose.model("Product", ProductSchema);