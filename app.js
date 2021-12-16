const express = require("express");
const bodyParser = require("body-parser");



const app = express();


//BODY PARSER
app.use(bodyParser.urlencoded({ extended: true }));

//PUBLIC FOLDER
app.use(express.static("public"));

//EJS VIEW ENGINE
app.set("view engine", "ejs");


// INDEX PAGE
app.get("/", function (req, res) {
    res.render("index");
});

// ABOUT PAGE
app.get("/about", function (req, res) {
    res.render("about");
});

// WORK PAGE
app.get("/work", function (req, res) {
    res.render("work");
});

// services PAGE
app.get("/services", function (req, res) {
    res.render("services");
});

// CONATCt PAGE
app.get("/contact", function (req, res) {
    res.render("contact");
});



//Server
app.listen(3000, function (req, res) {
    console.log("Server start at port 3000");
})