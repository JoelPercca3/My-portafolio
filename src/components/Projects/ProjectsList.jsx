import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectList = () => {
  const projects = [
    {
      title: 'Proyecto 1',
      description: 'Descripción breve del Proyecto 1.',
      liveLink: 'https://live-link-proyecto1.com',
      repoLink: 'https://github.com/usuario/proyecto1',
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción breve del Proyecto 2.',
      liveLink: 'https://live-link-proyecto2.com',
      repoLink: 'https://github.com/usuario/proyecto2',
    },
    {
        title: 'Proyecto 3',
        description: 'Descripción breve del Proyecto 1.',
        liveLink: 'https://live-link-proyecto1.com',
        repoLink: 'https://github.com/usuario/proyecto1',
      },
    // Añade más proyectos aquí
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Mis Proyectos</h1>
      {projects.map((project, index) => (
        <ProjectItem
          key={index}
          title={project.title}
          description={project.description}
          liveLink={project.liveLink}
          repoLink={project.repoLink}
        />
      ))}
    </div>
  );
};

export default ProjectList;
