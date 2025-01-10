import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GoRocket } from 'react-icons/go';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.body.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    document.body.classList.toggle('dark', !isDarkMode);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-gray-800 p-4 text-white ${isDarkMode ? 'bg-gray-900' : 'bg-gray-800'}`}>
      <div className="container mx-auto flex items-center">
        <Link to="/" className="flex items-center text-2xl font-bold">
          <GoRocket size={32} className="mr-2" />
          My Portfolio
        </Link>
        <div className="hidden md:flex ml-auto space-x-8">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/skills"
            className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition duration-300"
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition duration-300"
          >
            Projects
          </Link>
          <Link
            to="/education"
            className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition duration-300"
          >
            Education
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
