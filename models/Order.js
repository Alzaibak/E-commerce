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
        amount: {type:Number, require:true},
        address: {type:Object},
        status: {type:String,default:"En cours"}
},
    { timestamps:true},
);

module.exports = moongose.model('User', CartSchema);