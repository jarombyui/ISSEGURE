import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-section h-[600px] relative">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4">
        <div className="mb-8">
          <img
            src="/images/ISSEGUREX.png"
            alt="ISSEGUREX Logo"
            className="h-40 w-auto max-w-sm object-contain rounded-xl shadow-lg mb-6 transform hover:scale-105 transition-all duration-300"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          DALE MAYOR NIVEL A TU CERTIFICACIÓN
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl">
          SOMOS EL CENTRO ESPECIALIZADA EN SEGURIDAD INTEGRAL
        </p>
        <p className="text-lg md:text-xl mb-8">
          CERTIFÍCATE CON LOS EXPERTOS DE ISSEGUREX / CONTAMOS CON AÑOS DE EXPERIENCIA EN EL MERCADO
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <Link 
            to="/cursos"
            className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Ver Cursos
          </Link>
          <Link 
            to="/servicios"
            className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Validar Certificado
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero; 