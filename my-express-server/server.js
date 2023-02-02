const { response } = require("express");
const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello, World!</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at: adiazvictores@gmail.com");
});

app.get("/about", function(req, res){
    res.send("My name is Andres and I am a web developer.");
});

app.get("/hobbies", function(req, res){
    res.send("<ul><li>Programming</li><li>Reading</li><li>Playing video games</li></ul>");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});