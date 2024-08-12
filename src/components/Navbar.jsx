// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          My Portfolio
        </Link>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition duration-300"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition duration-300"
          >
            Projects
          </Link>
          <Link
            to="/skills"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition duration-300"
          >
            Skills
          </Link>
          <Link
            to="/contact"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition duration-300"
          >
            Contact
          </Link>
          <Link
            to="/education"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition duration-300"
          >
            Education
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
