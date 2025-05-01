import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-blue-400 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Todo App</h1>
        <p className="text-gray-600 mb-6 text-lg">
          Finish your todays task
        </p>
        <Link
          to="/todo"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          View My Todos
        </Link>
      </div>
    </div>
  );
};

export default Home;
