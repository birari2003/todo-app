// Here we have created a database Schema

const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false }, // here I have taken Boolean value as we need to toggle the state as complited or not
  date: { type: Date, default: Date.now } // for tracking todays day
});

module.exports = mongoose.model('Todo', TodoSchema);

