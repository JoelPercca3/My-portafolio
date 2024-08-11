import React from 'react';

const SkillItem = ({ skill }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">{skill.name}</h3>
      <p className="text-gray-700">{skill.description}</p>
    </div>
  );
};

export default SkillItem;
