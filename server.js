const express = require("express");
const mongoose = require("mongoose");
const { JobRouter } = require("./routers/Job.Router");
require('dotenv').config();

const PORT = process.env.PORT || 10000;

const MONGODB_URI = process.env.MONGODB_URI;

const app = express();

mongoose.connect(MONGODB_URI)
    .then(()=>{
        console.log("Server connected to DB successfully")
    })
    .catch((error)=> console.log(error));

// Middleware
app.use(express.json());

app.use(JobRouter);

app.use("/*",(req,res)=>{
    res.status(404).json({
        "message" : "Page not found"
    })
});

app.listen(PORT,()=>{
    console.log("Server up and running at", PORT)
})