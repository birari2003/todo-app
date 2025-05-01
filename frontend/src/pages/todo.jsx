import React, { useEffect, useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  // Fetch today's todos - It will only display todays todo list
  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/todos");
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error('Error fetching:', error);
    }
  };

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      const response = await fetch("http://localhost:5000/api/todos", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            { text }
        ),
      });
      const newTodo = await response.json();
      setTodos([...todos, newTodo]);
      setText('');
    } catch (error) {
      console.error('Error in adding:', error);
    }
  };

 // This function toggles the completed status of a todo item
const handleToggle = async (id) => {
    try {
      // Sending a PATCH request to update the completion status of the task
      const response = await fetch(`http://localhost:5000/api/todos/${id}/toggle`, {
        method: 'PATCH', // PATCH is used to update
      });
  
      const updated = await response.json();
  
      // Here is the main step we are manageing the state - the local state with the new completed status
      setTodos(
        todos.map((todo) =>
          todo._id === id ? { ...todo, completed: updated.completed } : todo
        )
      );
    } catch (error) {
      console.error('Error toggling todo:', error);
    }
  };
  

  useEffect(() => {
    fetchTodos();
  }, []);


  return (
    <div className="mt-10 p-6 bg-white rounded-xl">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Today's To-Do</h2>

      <form onSubmit={handleAddTodo} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter a task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:cursor-pointer"
        >
          Add
        </button>
      </form>

      <ul className="space-y-2">
        {todos.length === 0 ? (
          <li className="text-center text-gray-500">No tasks for today</li>
        ) : (
          todos.map((todo) => (
            <li
              key={todo._id}
              onClick={() => handleToggle(todo._id)}
              className={`cursor-pointer px-4 py-2 rounded-md ${
                todo.completed
                  ? 'bg-green-100 text-green-700 line-through'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              {todo.text}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Todo;
