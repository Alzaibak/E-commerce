
const router = require("express").Router();

router.get("/usertest", (req,res) => {
    res.send("user test is done");
});

router.post("/userposttest", (req,res) => {
    const username = req.body.username;
    res.send ("user name is: "+ username)
});

module.exports = router;