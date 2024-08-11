import React from 'react';
import SkillsList from '../components/Skills/SkillsList'; // Verifica que la ruta sea correcta

const skills = [
  { name: 'JavaScript', description: 'Lenguaje de programación para desarrollo web.' },
  { name: 'React', description: 'Librería para construir interfaces de usuario.' },
  // Agrega más habilidades aquí...
];

const Skills = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Mis Habilidades</h2>
      <SkillsList skills={skills} />
    </div>
  );
};

export default Skills;
