import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { GoRocket } from 'react-icons/go';
import { CiLight } from 'react-icons/ci';
import { FaHome, FaTools } from "react-icons/fa";
import { BiSolidWrench } from "react-icons/bi";
import { IoMdSchool } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { BsTelephonePlus } from "react-icons/bs";

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
    <nav className={`bg-gray-800 p-4 text-white ${isDarkMode ? 'bg-gray-900' : 'bg-gray-800'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center text-2xl font-bold">
          <GoRocket size={32} className="mr-2" />
          My Portfolio
        </Link>
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} className="focus:outline-none">
            <CiLight size={24} />
          </button>
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <div className={`fixed inset-0 bg-gray-800 z-50 md:relative md:flex md:space-x-4 md:bg-transparent md:opacity-100 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="md:hidden flex flex-col space-y-4 p-4">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition duration-300 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <FaHome size={20} className="mr-2" />
              Home
            </Link>
            <Link
              to="/skills"
              className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition duration-300 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <FaTools size={20} className="mr-2" />
              Skills
            </Link>
            <Link
              to="/projects"
              className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition duration-300 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <BiSolidWrench size={20} className="mr-2" />
              Projects
            </Link>
            <Link
              to="/education"
              className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition duration-300 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <IoMdSchool size={20} className="mr-2" />
              Education
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition duration-300 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <IoPersonSharp size={20} className="mr-2" />
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition duration-300 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <BsTelephonePlus size={20} className="mr-2" />
              Contact
            </Link>
          </div>
          <div className="hidden md:flex md:space-x-4">
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
      </div>
    </nav>
  );
};

export default Navbar;
