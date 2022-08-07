const moongose = require("mongoose");

const ProductSchema = moongose.Schema (
    {
        tilte: {type:String, require:true, unique:true},
        dec: {type: String, require:true},
        img: {type:String, require:true},
        categories: {type:Array},
        size: {type:String},
        color: {type:String},
        price: {type:String, require:true},
    },
    { timestamps:true},
);

module.exports = moongose.model('product', ProductSchema);