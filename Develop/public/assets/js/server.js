
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));



// app.get("/", function (req, res){
//     res.sendFile(__dirname + "/index.html");
// });

// app.post("/", function(req, res){
//     res.send("Thanks!");
// });


// module.exports/imports

app.listen(3000, function(){
    console.log("Server started on port 3000");
});