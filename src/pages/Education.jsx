// src/pages/Education.jsx
import React from 'react';
import ChurchImage from '../assets/images/Church.JPG'; // Ajusta la ruta si es necesario
import FundetImage from '../assets/images/Fundet.jpeg'; // Ajusta la ruta si es necesario
import PathwayImage from '../assets/images/Pathway.JPG'; // Ajusta la ruta si es necesario

const Education = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Church Education */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img
              src={ChurchImage}
              alt="Church"
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Full-time missionary</h3>
            <p className="text-gray-600">
            I served as a full-time missionary for The Church of Jesus Christ of Latter-day Saints for two years. During this time, I participated in community service, teaching, and leadership activities. I developed strong interpersonal and communication skills, and gained valuable experience in problem-solving, cultural understanding, and project management. This experience reinforced my commitment to service, integrity, and personal growth.            </p>
          </div>
          
          {/* Fundet Education */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img
              src={FundetImage}
              alt="Fundet"
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Full Stack web development technician</h3>
            <p className="text-gray-600">
            Graduated with a technician degree in web development, focusing in both, front-end and back-end technologies.
            </p>
          </div>

          {/* Pathway Education */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img
              src={PathwayImage}
              alt="Pathway"
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Pathway Connect Certificate</h3>
            <p className="text-gray-600">
            Completed courses getting student and professional skills with an emphasis on writing, mathematics, and programming.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
