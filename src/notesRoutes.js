const express = require("express");
const notesController = require("./notesController");

const notesRouter = express.Router();

// GET request to retrieve all notes
notesRouter.get("/", notesController.get);

// POST request to add a new note
notesRouter.post("/", notesController.post);

// DELETE request to delete a note by ID
notesRouter.delete("/:id", notesController.deleteNote);

module.exports = notesRouter;
