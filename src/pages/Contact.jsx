import React from 'react';

const Contact = () => {
  return (
    <section className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">Contacto</h1>
      <p className="mt-4">Puedes contactarme a través de los siguientes medios:</p>
      <ul className="mt-4">
        <li>Email: joelpercca3@gmail.com</li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/tuusuario" className="text-blue-500">Mi LinkedIn</a></li>
        <li>GitHub: <a href="https://github.com/tuusuario" className="text-blue-500">Mi GitHub</a></li>
      </ul>
    </section>
  );
};

export default Contact;
