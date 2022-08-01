const jsonWebToken = require("jsonwebtoken");




const tokenVerfication = (req,res,next)=>{
    const authHeader = req.headers.token;

    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jsonWebToken.verify(token, process.env.JWT_SECRET_KEY,(err,user)=>{
            if (err) res.status(403).json("Wrong token");
            req.user = user;
            next();
        })
    } else {
        return res.status(401).json("You are not authentised")
    }
}

const tokenVerificationAndAuthorization = (req,res,next) =>{
    tokenVerfication(req,res,()=>{
        
        if (req.user._id == req.params[':id'] || req.user.isAdmin) {
            
            
            next();
        }else{ res.status(403).json("You are not allowed to do that")}
    })
}

module.exports = {tokenVerfication, tokenVerificationAndAuthorization};