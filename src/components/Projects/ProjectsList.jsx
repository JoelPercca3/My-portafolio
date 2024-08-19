import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectList = () => {
  const projects = [
    {
      title: 'Weather app',
      description: 'A web application that shows different weather facts in your nearest position or in any place that can be found by search..',
      liveLink: 'https://proyec-final.vercel.app/',
      repoLink: 'https://github.com/JoelPercca3/ProyecFinal.git',
    },
    {
      title: 'Ecommerce app',
      description: 'This simple eCommerce is an online platform designed to offer an intuitive and efficient shopping experience. The app allows users to browse products, make purchases and manage their orders in a simple way. This project stands out for its focus on essential functionality and ease of use.',
      liveLink: 'https://practica-calificada10.vercel.app/#',
      repoLink: 'https://github.com/JoelPercca3/PracticaCalificada10.git',
    },
    {
        title: 'Winbnb app',
        description: 'A web application inspired by Airbnb to look for different flats by location and guests.',
        liveLink: 'https://min-proyect.vercel.app/',
        repoLink: 'https://github.com/JoelPercca3/minProyect.git',
      },
      {
        title: 'Space app',
        description: 'A web application inspired by Airbnb to look for different flats by location and guests.',
        liveLink: 'https://practica-calificada3.vercel.app/',
        repoLink: 'https://github.com/JoelPercca3/PracticaCalificada3.git',
      },
      {
        title: 'Authentication app',
        description: 'A web application that allows you to register as a new user and allows us to view the profile with your data and edit it.',
        liveLink: 'https://practica-calificada3.vercel.app/',
        repoLink: 'https://github.com/JoelPercca3/PracticaCalificada3.git',
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
