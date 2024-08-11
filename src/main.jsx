// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/tailwind.css'; // Asegúrate de importar tailwind.css aquí
import './styles/global.css';  // También importa global.css si tienes estilos globales

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
