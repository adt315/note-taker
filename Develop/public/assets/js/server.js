
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

// app.get("/", function(req, res) {
//     res.json(path.join(__dirname, "public/index.html"));
//   });

// app.get("/", function (req, res){
//     res.sendFile(__dirname + "/index.html");
// });

// app.post("/", function(req, res){
//     res.send("Thanks!");
// });


// module.exports/imports

var PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
    console.log("Server started");
});