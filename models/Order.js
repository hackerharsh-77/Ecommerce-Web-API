const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
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
    ],
    amount:{
        type: Number,
        require: true
    },
    address:{
        type: Object,
        require: true, 
    },
    status:{
        type: String,
        default: "pending"
    },
   

},{timestamp:true});

module.exports = mongoose.model("Order", OrderSchema);