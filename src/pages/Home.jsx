// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import ProjectsList from '../components/Projects/ProjectsList';
import About from './About'; // Agrega esta línea para importar el componente About
import Education from './Education'; // Agrega esta línea para importar el componente Education
import { Link } from 'react-router-dom';

const skills = [
  { 
    name: 'Frontend Development', 
    description: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React.js', 'Tailwind CSS', 'React Router 6', 'Responsive Design']
  },
  { 
    name: 'Backend Development', 
    description: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'RESTful APIs']
  },
  { 
    name: 'Other Skills', 
    description: ['Git', 'GitHub', 'Intermediate-Advanced English', 'Native Spanish language']
  },
];

const Home = () => {
  return (
    <>
      <Hero />
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
            Skills & Knowledge
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  {skill.name}
                </h3>
                <ul className="text-gray-600 list-disc list-inside space-y-1">
                  {skill.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Proyectos Destacados</h2>
          <ProjectsList />
        </div>
      </section>

      <Education /> {/* Coloca el componente Education aquí */}

      <About /> {/* Coloca el componente About después del componente Education */}
    </>
  );
};

export default Home;
