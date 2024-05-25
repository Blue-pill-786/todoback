// todoSchema.js
const mongoose = require("mongoose");

// Define the schema for your todo items
const todoSchema = new mongoose.Schema({
  text: String,
  completed: { type: Boolean, default: false },
});

// Create a Mongoose model based on the schema
const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;