import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import About from './pages/About';
import Courses from './pages/Courses';
import Diplomas from './pages/Diplomas';
import ServicesPage from './pages/Services';
import SuggestionBox from './pages/SuggestionBox';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/cursos" element={<Courses />} />
          <Route path="/diplomados" element={<Diplomas />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/sugerencias" element={<SuggestionBox />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App; 