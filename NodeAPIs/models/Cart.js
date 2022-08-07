const moongose = require("mongoose");

const CartSchema = moongose.Schema (
    {
        userId: {type:String, require:true},
        products:[
            {
                productId: {type:String},
                quantity: {type:Number, default:1,}
            }
        ],
    },
    { timestamps:true},
);

module.exports = moongose.model('Cart', CartSchema);