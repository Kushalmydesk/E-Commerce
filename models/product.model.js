const mongoose = require("mongoose");

const product_schema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
    },
    availablity:{
        type:Number,
        required: true,
    },
    price:{
        type:Number,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        optional: true,
    },
    image_url:{
        type: String,
        required: true,
    },
    manufacturer:{
        type:String,
        required: true,
    },
    createdAt: {
        type: Date,
        default : () => {
            return new Date();
        },
        immutable : true,
    },
    updatedAt : {
        type:  Date,
        default : () => {
            return new Date();
        }
    }


});


module.exports = mongoose.model("Products" , product_schema)