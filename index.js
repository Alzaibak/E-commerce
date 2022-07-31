// express, mongodb server import 
const express = require("express");
const app = express();
const moongose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require ("./routes/user.js");
const authenticationUser = require("./routes/authentication");


dotenv.config();

// mongoDb database liniking
moongose
.connect(process.env.MONGO_URL)
.then (()=> console.log("DB connection Done")).catch((err)=>console.log("Connection impossible with DB Database"));

// user route liniking
app.use(express.json());
app.use("/api/auth", authenticationUser);
app.use("/api/users", userRoute);


//Server connection
app.listen(process.env.PORT || 5000,() =>{
    console.log("connected")
})