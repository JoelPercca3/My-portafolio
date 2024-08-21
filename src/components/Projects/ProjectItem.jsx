// src/components/Projects/ProjectItem.jsx
import React from 'react';

const ProjectItem = ({ title, description, liveLink, repoLink, image, frontend, backend }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover mb-4" />
      <div className="p-4">
        <h2 className="text-xl md:text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 text-sm md:text-base mb-4">{description}</p>
        <div className="flex flex-col space-y-2">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 font-semibold transition-colors text-sm md:text-base"
          >
            Live Demo
          </a>
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600 font-semibold transition-colors text-sm md:text-base"
          >
            GitHub
          </a>
          {frontend && (
            <a
              href={frontend.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 font-semibold transition-colors text-sm md:text-base"
            >
              Frontend Repo
            </a>
          )}
          {backend && (
            <a
              href={backend.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 font-semibold transition-colors text-sm md:text-base"
            >
              Backend Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
