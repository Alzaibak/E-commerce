const router = require("express").Router();
const CryptoJS = require("crypto-js");
const user = require("../models/USER");

// New user registration
router.post("/Register", async (req, res) =>{
    const firstRegistre = new user({
        username: req.body.username,
        email: req.body.email,
        // crypting password in database
        password:  CryptoJS.AES.encrypt( req.body.password, process.env.SECRET_PASSWORD).toString(), 

    });
    try {
       const savedUser = await firstRegistre.save();
       res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json(error);
    }
});

// user Login

router.post("/login", async (req, res)=>{
    try {
        const userInfo = await user.findOne({email: req.body.email});
        
        !userInfo && res.status(401).json("Wrong email");

        const decrptPAssword = CryptoJS.AES.decrypt(userInfo.password, process.env.SECRET_PASSWORD);
        const password = decrptPAssword.toString(CryptoJS.enc.Utf8);
        password !== req.body.password && res.status(401).json("Wrong password");
        res.status(200).json(userInfo);

    } catch (error) {
        res.status(500).json("Error");
    }
})
module.exports = router;
