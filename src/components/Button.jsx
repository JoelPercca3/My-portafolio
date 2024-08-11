import React from 'react';

const Button = ({ onClick, children, className, type = 'button' }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-semibold text-white bg-blue-500 hover:bg-blue-600 ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
