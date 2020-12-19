
const express = require ("express");
const fs = require ("fs");
const path = require ("path");
const dbjson = require ("./db/db.json");
const notes = require("./notes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());


// HTML Routes 

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/notes", (req,res) => {
    res.sendFile(__dirname + "/public/notes.html");
});   

// API Routes

app.get("/api/notes", (req, res) => res.json (dbjson));

// * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

app.post("/api/notes", (req, res) => {
    const newPost = {
        id: req.body.id,
        title: req.body.title,
        text: req.body.text 
    }
    dbjson.push(newPost);
    res.json(newPost);
}); 

// const newDB = fs.readFileSync("./db/db.json")
// console.log(newDB);
// res.json(JSON.parse(newDB));

// * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

// app.delete("/api/notes/:id", (req, res) => {


   

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});