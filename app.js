const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = [];

app.set("view-engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))
 
app.get('/', function (req, res) {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let day = today.toLocaleString("en-US", options);
    res.render("list.ejs", {
        day: day,
        newlistitem: items
    });
})


app.post('/', function (req, res) {
    let item = req.body.newitem;
    if (item === "") {
        res.redirect("/");
    }else {
           items.push(item);
    console.log(item);
    res.redirect("/");
        }
 
})

let port = 3000;
app.listen(port, function (req, res) {
    console.log("server is up .. ")
})