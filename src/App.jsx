import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills'; 
import Education from './pages/Education'; // Importa el nuevo componente// Asegúrate de que este sea el nombre correcto
import NotFound from './pages/NotFound';
import MainLayout from './layouts/MainLayout';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} /> {/* Ruta para Skills */}
          <Route path="/education" element={<Education />} /> {/* Ruta para Education */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
