// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Mi Portafolio
        </Link>
        <div>
          <Link to="/" className="mx-2">Inicio</Link>
          <Link to="/about" className="mx-2">Sobre mí</Link>
          <Link to="/projects" className="mx-2">Proyectos</Link>
          <Link to="/skills" className="mx-2">Habilidades</Link>
          <Link to="/contact" className="mx-2">Contacto</Link>
          <Link to="/education" className="mx-2">Educación</Link> {/* Nuevo enlace */}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
