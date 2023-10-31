const notes = [
    {
        id: 1,
        text: "Please dont waste your time reading this note. As it is a dummy note",
        createdOn: new Date(),
    },
    {
        id:2,
      text: "Go to Office at 10",
      createdOn: new Date(),
    },
    {
        id:3,
      text: "Meeting at 11",
      createdOn: new Date(),
    },
    {
        id:4,
        text: "Meeting at 12",
        createdOn: new Date(),
      },
  ];
  
  // Handle GET request
  const get = (req, res) => {
    return res.json(notes);
  };
  
  // Handle POST request
  const post = (req, res) => {
    const { id,text,createdOn } = req.body;
    // console.log("request.body",req.body)

  // Add the new TODO to the in-memory storage
  const newNote = { id,text,createdOn };
  notes.push(newNote);

  // Respond with the added TODO
  res.status(201).json(newNote);
};


  // Handle DELETE request
const deleteNote = (req, res) => {
    // Extract the ID to be deleted from the request parameters
    const noteIdToDelete = parseInt(req.params.id);
    console.log(req.params.id);
    console.log(noteIdToDelete);

    // Find the index of the note with the specified ID
    const noteIndex = notes.findIndex((note) => note.id === noteIdToDelete);

    // Check if the note with the given ID exists
    if (noteIndex === -1) {
        return res.status(404).json({ error: 'Note not found' });
    }

    // Remove the note from the array by its index
    notes.splice(noteIndex, 1);
    console.log(notes)
    // Respond with a success message
    res.status(204).send();
};
  module.exports = {
    get,
    deleteNote,
    post,
  };
