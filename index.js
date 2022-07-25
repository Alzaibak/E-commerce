const express = require("express");
const app = express();
const moongose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

moongose
.connect(process.env.MONGO_URL)
.then (()=> console.log("DB connection Done")).catch((err)=>console.log("error"));
app.listen(5000,() =>{
    console.log("connected")
})