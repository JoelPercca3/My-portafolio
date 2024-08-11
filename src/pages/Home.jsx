import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ProjectsList from '../components/Projects/ProjectsList';
import SkillItem from '../components/Skills/SkillItem';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Mis Habilidades</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <SkillItem skill="React" icon="/path-to-icon/react.png" />
            <SkillItem skill="Node.js" icon="/path-to-icon/nodejs.png" />
            <SkillItem skill="MongoDB" icon="/path-to-icon/mongodb.png" />
            <SkillItem skill="Tailwind CSS" icon="/path-to-icon/tailwind.png" />
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Proyectos Destacados</h2>
          <ProjectsList />
        </div>
      </section>
    </>
  );
};

export default Home;
