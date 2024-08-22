// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import ProjectsList from '../components/Projects/ProjectsList';
import About from './About';
import Education from './Education';
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5, FaCss3, FaBootstrap, FaReact, FaNode, FaGitAlt, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiResponsive } from "react-icons/di";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";

const skills = [
  { 
    name: 'Frontend Development', 
    description: [
      { text: 'HTML', icon: FaHtml5, color: 'text-orange-600' }, 
      { text: 'CSS', icon: FaCss3, color: 'text-blue-600' },
      { text: 'JavaScript', icon: IoLogoJavascript, color: 'text-yellow-500' },
      { text: 'Bootstrap', icon: FaBootstrap, color: 'text-purple-600' },
      { text: 'React.js', icon: FaReact, color: 'text-cyan-600' },
      { text: 'Tailwind CSS', icon: RiTailwindCssFill, color: 'text-teal-500' },
      { text: 'React Router 6', icon: FaReact, color: 'text-cyan-600' },
      { text: 'Responsive Design', icon: DiResponsive, color: 'text-green-500' }
    ]
  },
  { 
    name: 'Backend Development', 
    description: [
      { text: 'Node.js', icon: FaNode, color: 'text-green-700' },
      { text: 'Express.js', icon: SiExpress, color: 'text-gray-700' },
      { text: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
      { text: 'MySQL', icon: SiMysql, color: 'text-blue-700' },
      { text: 'RESTful APIs', icon: FaNode, color: 'text-green-700' }
    ]
  },
  { 
    name: 'Other Skills', 
    description: [
      { text: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
      { text: 'GitHub', icon: FaGithub, color: 'text-gray-800' },
      { text: 'Intermediate-Advanced English', icon: FaReact, color: 'text-blue-500' }, // Puedes cambiar el ícono y color
      { text: 'Native Spanish language', icon: FaReact, color: 'text-red-500' } // Puedes cambiar el ícono y color
    ]
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
                <ul className="text-gray-600 list-none space-y-2">
                  {skill.description.map((item, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <item.icon className={`text-xl ${item.color}`} />
                      <span>{item.text}</span>
                    </li>
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