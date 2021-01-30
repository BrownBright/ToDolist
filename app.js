const express = require("express");
const bodyParser = require("body-parser");
const dateLocal = require(__dirname + "/datelocal.js");
const handler = require(__dirname + "/mainhandler.js");

const app = express();

let items = [];

    console.log(dateLocal());

app.set("view-engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))
 
app.get('/', function (req, res) {
    res.render("list.ejs", {
        day: dateLocal(),
        newlistitem: items
    });
})


app.post('/', function (req, res) {
    let item = req.body.newitem;
                if(req.body.hasOwnProperty("adder")){
                handler.add_item(items , item , req , res);
                console.log(req.body)
                 }if(req.body.hasOwnProperty("deleter")){
                    handler.delete_item(items , req.body.deleter , res)
                 }
})




let port = 3000;
app.listen(port, function (req, res) {
    console.log("server is up .. ")
})