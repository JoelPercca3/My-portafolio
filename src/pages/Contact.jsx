import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section className="container mx-auto p-6">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-8">Contacto</h1>
      <p className="text-lg text-gray-600 mb-6">Puedes contactarme a través de los siguientes medios:</p>
      <ul className="space-y-4 mb-12">
        <li className="text-lg">
          <span className="font-semibold text-gray-700">Email:</span> 
          <a 
            href="mailto:joelpercca3@gmail.com" 
            className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
            joelpercca3@gmail.com
          </a>
        </li>
        <li className="text-lg">
          <span className="font-semibold text-gray-700">LinkedIn:</span> 
          <a 
            href="https://www.linkedin.com/in/joel-percca-cuadros-2b58512a3/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
            Mi LinkedIn
          </a>
        </li>
        <li className="text-lg">
          <span className="font-semibold text-gray-700">GitHub:</span> 
          <a 
            href="https://github.com/JoelPercca3" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
            Mi GitHub
          </a>
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-gray-800 mb-6">Envíame un mensaje</h2>
      <ContactForm />
    </section>
  );
};

export default Contact;
