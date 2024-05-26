const Todo = require('../models/todosSchema');

// GET handler to retrieve todos
exports.getTodos = async (req, res) => {
  try {
    // Fetch todos from the database
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong", error });
  }
};

// POST handler to add a new todo
exports.addTodo = async (req, res) => {
  try {
    
    const { text, completed } = req.body;

    // Create a new todo item using the Todo model
    const newTodo = new Todo({
      text,
      completed: completed || false,
    });

    // Save the new todo item to the database
    await newTodo.save();

    // Respond with the newly created todo item
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong", error });
    console.log(error)
  }
};
exports.deleteTodo = async (req, res) => {
  try {
    const { todoId } = req.params;

    // Find the todo by ID and delete it
    const deletedTodo = await Todo.findByIdAndDelete(todoId);

    if (!deletedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    // Respond with success message
    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong", error });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { todoId } = req.params;
    const { text, completed } = req.body;
    // Find the todo by ID and update it
    const updatedTodo = await Todo.findByIdAndUpdate(todoId, {
      text,
      completed,
      });
      if (!updatedTodo) {
        return res.status(404).json({ error: "Todo not found" });
        }
        // Respond with success message
        res.json({ message: "Todo updated successfully" });
        } catch (error) {
          res.status(500).json({ error: "Something went wrong", error });
          }
          };