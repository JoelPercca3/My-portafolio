// src/components/Projects/ProjectList.jsx
import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectList = () => {
  const projects = [
    {
      title: 'Weather app',
      description: 'A web application that shows different weather facts in your nearest position or in any place that can be found by search..',
      liveLink: 'https://proyec-final.vercel.app/',
      repoLink: 'https://github.com/JoelPercca3/ProyecFinal.git',
      image: '/src/assets/images/weather.JPG'
    },
    {
      title: 'Ecommerce app',
      description: 'This simple eCommerce is an online platform designed to offer an intuitive and efficient shopping experience. The app allows users to browse products, make purchases and manage their orders in a simple way. This project stands out for its focus on essential functionality and ease of use.',
      liveLink: 'https://practica-calificada10.vercel.app/#',
      repoLink: 'https://github.com/JoelPercca3/PracticaCalificada10.git',
      image: '/src/assets/images/ecommerce.JPG'
    },
    {
      title: 'Winbnb app',
      description: 'A web application inspired by Airbnb to look for different flats by location and guests.',
      liveLink: 'https://min-proyect.vercel.app/',
      repoLink: 'https://github.com/JoelPercca3/minProyect.git',
      image: '/src/assets/images/tiendaLocation.JPG'
    },
    {
      title: 'Space app',
      description: 'A web application inspired by Airbnb to look for different flats by location and guests.',
      liveLink: 'https://practica-calificada3.vercel.app/',
      repoLink: 'https://github.com/JoelPercca3/PracticaCalificada3.git',
      image: '/src/assets/images/spaceApp.JPG'
    },
    {
      title: 'Authentication App',
      description: 'A web application that allows users to register, view their profile with their data, and edit it. The application is divided into a backend and a frontend for a comprehensive full-stack solution.',
      liveLink: 'https://frontend-login-gray.vercel.app/login',
      repoLink: 'https://github.com/JoelPercca3/PracticaCalificada3.git',
      image: '/src/assets/images/login.JPG',
      frontend: {
        description: 'The frontend of the application is built with React, Vite, and Tailwind CSS. It provides a user-friendly interface for authentication, including registration and login pages, and a profile page where users can view and update their information.',
        repoLink: 'https://github.com/JoelPercca3/Frontend-login.git',
        technologies: ['React', 'Vite', 'Tailwind CSS', 'Axios']
      },
      backend: {
        description: 'The backend of the application is developed with Node.js and Express. It handles user authentication, registration, and profile management. The backend communicates with a database to store user data securely.',
        repoLink: 'https://github.com/JoelPercca3/Backend-login.git',
        technologies: ['Node.js', 'Express', 'MySQL', 'bcrypt', 'jsonwebtoken']
      }
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Mis Proyectos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            description={project.description}
            liveLink={project.liveLink}
            repoLink={project.repoLink}
            image={project.image}
            frontend={project.frontend}
            backend={project.backend}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
