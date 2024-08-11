// src/pages/Education.jsx
import React from 'react';

const education = [
  {
    institution: 'Universidad XYZ',
    degree: 'Licenciatura en Ciencias de la Computación',
    year: '2022',
  },
  {
    institution: 'Instituto ABC',
    degree: 'Certificado en Desarrollo Web',
    year: '2020',
  },
  // Agrega más títulos aquí...
];

const Education = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Educación</h2>
      <div className="space-y-4">
        {education.map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{item.degree}</h3>
            <p className="text-gray-700">{item.institution}</p>
            <p className="text-gray-500">{item.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
