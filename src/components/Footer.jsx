import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Mi Portafolio. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
