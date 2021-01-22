const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.get('/', (req,res)=>{
    res.sendFile(__dirname+"\\index.html")
})


const port = 3000 ;
app.listen(port , function (req,res){
    console.log("server is up .. ")
})