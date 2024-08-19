import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Importamos los iconos de react-icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          My Portfolio
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <div className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
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
