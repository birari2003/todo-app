const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');


// Add a new todo in database
router.post('/todos', async (req, res) => {
    const { text } = req.body;
    try {
      const newTodo = new Todo({ text });
      await newTodo.save();
      res.status(201).json(newTodo);
    } catch (error) {
      res.status(500).json({ error: 'Error' });
    }
  });



// Get only today's todos , that will be apear for today only 
router.get('/todos', async (req, res) => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const end = new Date();
  end.setHours(23, 59, 59, 999);

  try {
    const todos = await Todo.find({ date: { $gte: start, $lte: end } }); // using the greater than less than 'date' is between 'start' and 'end' 
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});


// Toggle a todo's completion status as the task is complited or not
router.patch('/todos/:id/toggle', async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findById(id);
    todo.completed = !todo.completed; // Here we do the toggeling
    await todo.save();
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Toggle failed' });
  }
});


module.exports = router;