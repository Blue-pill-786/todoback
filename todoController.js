
const todos=[
    {
        "text":"Go to Gym at 9", "completed":false
    },
    {
        "text":"Go to Office at 10", "completed":false
    },
    {
        "text":"Meeting at 11", "completed":false
    }
]

module.exports.get=(req, res)=>{
    return res.end(JSON.stringify(todos));
}

module.exports.post = (req, res) => {
    try {
      // Parse the request body to extract the new to-do item's data
      const { text, completed } = req.body;
  
      // Generate a new to-do item object
      const newTodo = {
        text,
        completed: completed || false, // Set completed to false if not provided
      };
  
      // Add the new to-do item to the `todos` array
      todos.push(newTodo);
  
      // Respond with the newly created to-do item and a 201 Created status
      res.status(201).json(newTodo);
    } catch (error) {
      // Handle any errors that might occur during the process
      res.status(500).json({ error: "Something went wrong" });
    }
  };

  