const Note = require('../models/notesSchema');

// GET handler to retrieve notes
exports.getNotes = async (req, res) => {
  try {
    // Fetch notes from the database
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

// POST handler to add a new note
exports.addNote = async (req, res) => {
  try {
    
    const { text } = req.body;
    
    // Create a new note item using the Note model
    const newNote = new Note({
      text,
    });

    // Save the new note item to the database
    await newNote.save();

    // Respond with the newly created note item
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong", error });
  }
};

// DELETE handler to delete a note
exports.deleteNote = async (req, res) => {
  try {
    const { noteId } = req.params;

    // Find the note by ID and delete it
    await Note.findByIdAndDelete(noteId);

    // Respond with success message
    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong", error });
  }
};
