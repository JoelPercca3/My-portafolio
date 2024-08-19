// src/pages/Projects.jsx
import React from 'react';
import ProjectsList from '../components/Projects/ProjectsList';

const Projects = () => {
  return (
    <section className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Proyectos</h1>
      <p className="text-lg mb-8">Aquí puedes ver algunos de los proyectos en los que he trabajado.</p>
      <ProjectsList />
    </section>
  );
};

export default Projects;
