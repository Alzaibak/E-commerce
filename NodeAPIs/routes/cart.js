
const router = require("express").Router();
const Cart = require("../models/Cart");
const CryptoJS = require("crypto-js");
const { tokenVerfication, tokenVerificationAndAuthorization, tokenVerificationAndAdmin} = require("./tokenVerfication");


// add new product to the cart
router.post("/", tokenVerfication, async (req,res)=>{
    const addingToCarte = new Cart(req.body)
    try {
        const savedCart = await addingToCarte.save();
        res.status(200).json(savedCart);
    } catch (err) {
        res.status(500).json(err);
    }
})

// changing cart
router.put("/:id", tokenVerificationAndAuthorization, async (req,res)=>{
    if (req.body.password) {
        req.body.password =  CryptoJS.AES.encrypt( req.body.password, process.env.SECRET_PASSWORD).toString();

    }
    //update cart
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id,{
          $set: req.body
        },{new:true})
        res.status(200).json(updatedCart)
    } catch (error) {
        res.status(500).json(error)
    }
})

// cart deleting 
router.delete("/:id", tokenVerificationAndAuthorization ,async(req,res)=>{
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Your cart is deleted")
    } catch (error) {
        res.status(500).json(error)
    }
})


// Get user cart
router.get("/find/:userId", tokenVerificationAndAuthorization, async (req,res)=>{
    const cartInfo = await Cart.findOne({userId: req.params.userId});
     try {
        res.status(200).json(cartInfo)  

    } catch (err) {
        res.status(500).json(err) }
})

// Get all carts for all users by admin only
    router.get("/" , tokenVerificationAndAdmin, async (req,res)=>{
        try {
            const carts = await Cart.find();
            res.status(500).json(carts);
        } catch (err) {
            res.status(500).json(err);
        }
})


module.exports = router;