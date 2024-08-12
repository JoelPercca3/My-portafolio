import React from 'react';
import SkillsList from '../components/Skills/SkillsList'; // Verifica que la ruta sea correcta

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

const Skills = () => {
  return (
    <section className="container mx-auto p-6">
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
    </section>
  );
};

export default Skills;
