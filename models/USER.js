const moongose = require("mongoose");
const {Boolean} = require("webidl-conversions");

const UserSchema = new moongose (
    {
        username: {type:String, require:true, unique:true},
        email: {type: String, require:true, unique:true},
        password: {type:String, require:true},
        isAdmin:{
            type:Boolean,
            default:false,
        },
    },
    { timestamps:true},
);

module.exports = moongose.model('User', UserSchema);