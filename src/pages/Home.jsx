import React from 'react';
import Hero from '../components/Hero';
import ProjectsList from '../components/Projects/ProjectsList';
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
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">More About My Education</h2>
          <p className="mb-4">Discover more about my degrees and certifications.</p>
          <Link to="/education" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
            View Education
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
