import React from 'react';
import { Link } from 'react-router-dom'; // used for navigation purpose

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">TodoApp</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-200 transition">
            Home
          </Link>
          <Link to="/todo" className="hover:text-gray-200 transition">
            Todo
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
