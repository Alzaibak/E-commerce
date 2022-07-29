const router = require("express").Router();
const user = require("../models/USER");

// New user registration
router.post("/Register", async (req, res) =>{
    const firstRegistre = new user({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,

    });
    try {
       const savedUser = await firstRegistre.save();
       res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
