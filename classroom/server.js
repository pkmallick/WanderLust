
const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Hi,I am root!");
});

app.listen(2000,()=>{
    console.log("Server is listing to 2000");
});