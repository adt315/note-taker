
const express = require ("express");
const uuid = require ("uuid");
const fs = require ("fs");
const path = require ("path");
const dbjson = require ("./db/db.json");


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended:false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

//Notes API Routes
app.use("/api/notes", require("./routes/api/notes"));

// HTML Routes 
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/notes", (req,res) => {
    res.sendFile(__dirname + "/public/notes.html");
});   

// The application should have a `db.json` file on the backend that will be used to store 
// and retrieve notes using the `fs` module.


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});