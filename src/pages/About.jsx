// src/pages/About.jsx
import React from 'react';
import perfilImage from '../assets/images/perfil4.png'; // Ajusta la ruta si es necesario

const About = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img 
            src={perfilImage} 
            alt="Perfil" 
            className="w-48 h-auto rounded-full" 
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-6">About me</h2>
          <p className="text-gray-700">
            My name is Joel and I am a dedicated full stack developer passionate about creating exceptional user experiences. I have a strong foundation in front-end and back-end technologies. I am a hard-working individual who operates with integrity, accountability, and reliability. My keen observation skills, combined with my initiative and proactive approach, allow me to deliver high-quality web applications that meet and exceed user needs.
            I enjoy working in the programming area because I can be open to the latest technological advancements and am always eager to learn and adapt to new platforms and software. My goal is to leverage my experience to develop unique and effective solutions that provide users with seamless and engaging experiences.
            As a web developer, I am motivated by the opportunity to bring cutting-edge technologies to life, ensuring that they are accessible and functional for all users. I look forward to contributing my skills and enthusiasm to a forward-thinking team, where I can continue to grow and make a significant impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
