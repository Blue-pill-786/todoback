const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todoController');

// Routes
router.get('/', todosController.getTodos);
router.post('/', todosController.addTodo);
router.delete('/:id', todosController.deleteTodo)
module.exports = router;
