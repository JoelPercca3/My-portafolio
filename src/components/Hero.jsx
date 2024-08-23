import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import perfilImage from '../assets/images/perfil3.png';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-white h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between">
        {/* Contenido de texto a la izquierda */}
        <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/3 p-6 md:p-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-cyan-300">
            Hi, I am Joel Percca
          </h1>
          <div className="text-3xl md:text-4xl font-bold mb-4">
            <Typewriter
              words={['Welcome to my Portfolio']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <p className="text-lg md:text-xl mb-8 max-w-lg text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-green-400 font-semibold shadow-lg">
            I am a dedicated Full Stack Developer. Passionate about creating exceptional user experiences.
          </p>
          <div className="flex space-x-4">
            <a 
              href="projects" 
              className="relative inline-block px-6 py-3 font-bold text-white bg-blue-500 rounded-full shadow-lg transition-transform transform-gpu hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <span className="absolute inset-0 w-full h-full transition-transform duration-200 ease-out transform translate-x-1 translate-y-1 bg-blue-700 rounded-full shadow-lg"></span>
              <span className="relative">See My Projects</span>
            </a>
            <a 
              href="/Curriculum Joel Percca.pdf" 
              download 
              className="relative inline-block px-6 py-3 font-bold text-white bg-green-500 rounded-full shadow-lg transition-transform transform-gpu hover:scale-105 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              <span className="absolute inset-0 w-full h-full transition-transform duration-200 ease-out transform translate-x-1 translate-y-1 bg-green-700 rounded-full shadow-lg"></span>
              <span className="relative">Download My CV</span>
            </a>
          </div>
        </div>

        {/* Imagen a la derecha, más grande */}
        <div className="md:w-2/3 flex justify-center md:justify-end">
          <img 
            src={perfilImage} 
            alt="Perfil" 
            className="w-80 h-80 md:w-96 md:h-96 lg:w-112 lg:h-112 rounded-full mb-6 md:mb-0" 
            style={{
              boxShadow: 'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
