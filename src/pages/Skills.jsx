// src/pages/Skills.jsx
import React from 'react';
import SkillItem from '../components/Skills/SkillItem';

const Skills = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Habilidades</h1>
      <div className="flex flex-wrap">
        {/* Ejemplo de uso del componente SkillItem */}
        <SkillItem name="JavaScript" level="Avanzado" />
        <SkillItem name="React" level="Intermedio" />
        {/* Agrega más SkillItem según sea necesario */}
      </div>
    </div>
  );
};

export default Skills;
