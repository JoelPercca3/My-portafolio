import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ProjectsList from '../components/Projects/ProjectsList';
import SkillItem from '../components/Skills/SkillsItem';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Mis Habilidades</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <SkillItem skill={{ name: 'React', description: 'Librería para construir interfaces de usuario.' }} />
            <SkillItem skill={{ name: 'Node.js', description: 'Entorno de ejecución para JavaScript.' }} />
            <SkillItem skill={{ name: 'MongoDB', description: 'Base de datos NoSQL.' }} />
            <SkillItem skill={{ name: 'Tailwind CSS', description: 'Framework de diseño CSS.' }} />
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
          <h2 className="text-3xl font-bold mb-6">Más Sobre Mi Educación</h2>
          <p className="mb-4">Descubre más sobre mis títulos y certificaciones.</p>
          <Link to="/education" className="bg-blue-500 text-white px-4 py-2 rounded">Ver Educación</Link>
        </div>
      </section>
    </>
  );
};

export default Home;