// express, mongodb server import 
const express = require("express");
const app = express();
const moongose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require ("./routes/user")

dotenv.config();

// mongoDb database liniking
moongose
.connect(process.env.MONGO_URL)
.then (()=> console.log("DB connection Done")).catch((err)=>console.log("error"));

// user route liniking
app.use("/api/users", userRoute);

//Server connection
app.listen(process.env.PORT || 5000,() =>{
    console.log("connected")
})