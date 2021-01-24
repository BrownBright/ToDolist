const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view-engine","ejs");

app.get('/', function(req,res){
    var today = new Date();
    var options = {
        weekday:"long" , 
        day : "numeric" , 
        month : "long"
    }
    var day = today.toLocaleString("en-US",options);
    res.render("list.ejs",{day: day})
})


const port = 3000 ;
app.listen(port , function (req,res){
    console.log("server is up .. ")
})