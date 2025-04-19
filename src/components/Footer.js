import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', path: '#', icon: 'fab fa-facebook-f' },
    { name: 'Twitter', path: '#', icon: 'fab fa-twitter' },
    { name: 'LinkedIn', path: '#', icon: 'fab fa-linkedin-in' },
    { name: 'Instagram', path: '#', icon: 'fab fa-instagram' },
    { name: 'YouTube', path: '#', icon: 'fab fa-youtube' },
  ];

  const footerLinks = [
    { name: 'Inicio', path: '/' },
    { name: '¿Quiénes Somos?', path: '/about' },
    { name: 'Cursos', path: '/cursos' },
    { name: 'Diplomados', path: '/diplomados' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Contáctanos', path: '/contacto' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">ISSEGURE</h3>
            <p className="text-gray-400 mb-4">
              Instituto Superior de Seguridad, brindando educación especializada en seguridad integral por más de 20 años.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`${link.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ISSEGURE. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 