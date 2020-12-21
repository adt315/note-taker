const express = require("express");
const uuid = require("uuid");
const router = express.Router();
const fs = require("fs");
const notes = require("../../sample.js");

// API ROUTES

// Gets All Notes
router.get("/", (req, res) => res.json(notes));

// Gets Single Note
router.get("/:id", (req, res) => {
  res.json(notes.filter((note) => note.id === parseInt(req.params.id)));
});

// Create Note
router.post("/", (req, res) => {
  const newNote = {
    id: uuid.v4(),
    title: req.body.title,
    text: req.body.text,
  };

  notes.push(newNote);
  console.log(notes);
  res.json(newNote);
});

// Delete Note
router.delete("/:id", (req, res) => {
  let noteId = req.params.id;
  notes.splice(noteId, 1);
  for (let i = 0; i < notes.length; i++) {
    notes[i].id = i;
  }
  fs.writeFile("../../sample.js", JSON.stringify(notes), (err) => {
    if (err) {
      throw err;
    }
  });
  res.json(notes);
});

module.exports = router;
