import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import perfilImage from '../assets/images/perfil3.png';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-white h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between">
        {/* Contenido de texto a la izquierda */}
        <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/3 p-6 md:p-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Hi, I am Joel Percca</h1>
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
          <p className="text-lg md:text-xl mb-8 max-w-lg">
            I am a dedicated Full Stack Developer. Passionate about creating exceptional user experiences.
          </p>
          <a href="projects" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg transition-all duration-300">
            See My Projects
          </a>
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
