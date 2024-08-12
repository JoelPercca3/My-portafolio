import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Hi, I am Joel Percca</h1>
        <h1 className="text-4xl font-bold mb-4">Welcome to my Portfolio</h1>
        <p className="text-xl mb-8">I am a dedicated Full Stack Developer. Passionate about creating exceptional user experiences.</p>
        <a href="projects" className="bg-blue-500 text-white py-2 px-4 rounded">See My Projects</a>
      </div>
    </section>
  );
};

export default Hero;
