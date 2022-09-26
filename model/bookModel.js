const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    book_name: {
        type:String,
        required:true
    },
    image_url: {
        type:String,
        default:""
    },
    author: {
        type: String,
        required: true,
    },
    pages:{
        type:Number,
        default:""
    },
    price:{
        type:Number,
        required:true,
        default:""
    }

});

module.exports = mongoose.model("Books", bookSchema);