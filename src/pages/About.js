import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            ¿Quiénes Somos?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            ISSEGURE es el Instituto Superior de Seguridad líder en educación y certificación en seguridad integral.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Nuestra Misión</h3>
            <p className="text-gray-600">
              Formar profesionales altamente capacitados en el área de seguridad, brindando educación de calidad
              y certificaciones reconocidas a nivel nacional e internacional.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Nuestra Visión</h3>
            <p className="text-gray-600">
              Ser el referente en educación y certificación en seguridad, contribuyendo al desarrollo
              de profesionales que marquen la diferencia en el sector.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Nuestros Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-primary text-4xl mb-2">✓</div>
              <h4 className="font-semibold text-gray-900">Excelencia</h4>
              <p className="text-gray-600">Buscamos la máxima calidad en todo lo que hacemos</p>
            </div>
            <div className="text-center">
              <div className="text-primary text-4xl mb-2">✓</div>
              <h4 className="font-semibold text-gray-900">Integridad</h4>
              <p className="text-gray-600">Actuamos con honestidad y transparencia</p>
            </div>
            <div className="text-center">
              <div className="text-primary text-4xl mb-2">✓</div>
              <h4 className="font-semibold text-gray-900">Innovación</h4>
              <p className="text-gray-600">Nos adaptamos a los cambios y nuevas tecnologías</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 