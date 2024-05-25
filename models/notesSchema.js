const mongoose = require("mongoose");

// Define the schema for your note items
const noteSchema = new mongoose.Schema({
  text: String,
  createdOn: { type: Date, default: Date.now },
});

// Create a Mongoose model based on the schema
const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
