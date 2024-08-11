// src/components/Skills/SkillsList.jsx
import React from 'react';
import SkillItem from './SkillsItem';

const SkillsList = ({ skills }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill, index) => (
        <SkillItem key={index} skill={skill} />
      ))}
    </div>
  );
};

export default SkillsList;
