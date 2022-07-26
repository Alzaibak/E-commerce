// express, mongodb server connection 
const express = require("express");
const app = express();
const moongose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require ("./routes/user")

dotenv.config();

moongose
.connect(process.env.MONGO_URL)
.then (()=> console.log("DB connection Done")).catch((err)=>console.log("error"));

app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5000,() =>{
    console.log("connected")
})