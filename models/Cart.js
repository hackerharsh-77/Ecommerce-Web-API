const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    userid: {
        type: String,
        require: true,
        unique: true
    },
    products:[
        {
            products:{
                type: String,
            },
            quantity:{
                type: Number,
                default:1.
            },
        },
    ]
   

},{timestamp:true});

module.exports = mongoose.model("Cart", CartSchema);