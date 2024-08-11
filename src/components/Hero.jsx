import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Hola, soy [Tu Nombre]</h1>
        <p className="text-xl mb-8">Soy un Desarrollador Full Stack</p>
        <a href="projects" className="bg-blue-500 text-white py-2 px-4 rounded">Ver mis proyectos</a>
      </div>
    </section>
  );
};

export default Hero;
