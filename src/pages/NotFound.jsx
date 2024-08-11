import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Página no encontrada</p>
        <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded">Volver al inicio</Link>
      </div>
    </div>
  );
};

export default NotFound;
