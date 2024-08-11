import React from 'react';
import SkillsList from '../components/Skills/SkillsList';

const Skills = () => {
  // Datos de habilidades de ejemplo
  const skills = [
    { id: 1, name: 'JavaScript', description: 'Lenguaje de programación para el desarrollo web.' },
    { id: 2, name: 'React', description: 'Biblioteca para construir interfaces de usuario.' },
    { id: 3, name: 'Tailwind CSS', description: 'Framework de CSS para diseñar rápidamente.' },
    // Agrega más habilidades aquí
  ];

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6">Mis Habilidades</h1>
      <SkillsList skills={skills} />
    </section>
  );
};

export default Skills;
