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
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <div className={`md:flex md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/skills"
            className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/education"
            className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Education
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
