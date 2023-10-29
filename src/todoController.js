const todos = [
    {
        id:1,
      text: "Go to Gym at 9",
      completed: false,
    },
    {
        id:2,
      text: "Go to Office at 10",
      completed: false,
    },
    {
        id:3,
      text: "Meeting at 11",
      completed: false,
    },
    {
        id:4,
        text: "Meeting at 12",
        completed: false,
      },
  ];
  
  // Handle GET request
  const get = (req, res) => {
    return res.json(todos);
  };
  
  // Handle POST request
  const post = (req, res) => {
      const { text, completed } = req.body;
    //   console.log(req.body)
  
    // Add the new TODO to the in-memory storage
    const newTodo = { text, completed };
    todos.push(newTodo);
  
    // Respond with the added TODO
    res.status(201).json(newTodo);
  };
  module.exports = {
    get,
    post,
  };
