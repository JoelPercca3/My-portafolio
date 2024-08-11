import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/tailwind.css'; // Verifica que esta ruta sea correcta

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
