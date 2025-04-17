import React from 'react';

const Hero = () => {
  return (
    <div className="hero-section h-[600px]">
      <div className="flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          DALE MAYOR NIVEL A TU CERTIFICACIÓN
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl">
          SOMOS LA INSTITUCIÓN TÉCNICO EDUCATIVA ESPECIALIZADA EN SEGURIDAD INTEGRAL
        </p>
        <p className="text-lg md:text-xl mb-8">
          CERTIFÍCATE CON LOS EXPERTOS DE ISSEGUR / MÁS DE 20 AÑOS DE EXPERIENCIA
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Ver Cursos
          </button>
          <button className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Validar Certificado
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero; 