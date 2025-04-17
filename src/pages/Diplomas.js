import React from 'react';

const Diplomas = () => {
  const diplomas = [
    {
      id: 1,
      title: 'Diplomado en Seguridad Integral',
      description: 'Programa completo que abarca todos los aspectos de la seguridad moderna.',
      duration: '6 meses',
      modules: 8,
      image: '/images/diploma-security.jpg',
      features: [
        'Seguridad Física',
        'Seguridad Electrónica',
        'Gestión de Riesgos',
        'Legislación en Seguridad'
      ]
    },
    {
      id: 2,
      title: 'Diplomado en Ciberseguridad',
      description: 'Formación especializada en protección de sistemas y datos digitales.',
      duration: '5 meses',
      modules: 6,
      image: '/images/diploma-cyber.jpg',
      features: [
        'Seguridad de Redes',
        'Análisis de Vulnerabilidades',
        'Criptografía',
        'Gestión de Incidentes'
      ]
    },
    {
      id: 3,
      title: 'Diplomado en Protección Ejecutiva',
      description: 'Capacitación especializada en protección de personas de alto perfil.',
      duration: '4 meses',
      modules: 5,
      image: '/images/diploma-protection.jpg',
      features: [
        'Técnicas de Protección',
        'Planificación de Rutas',
        'Primeros Auxilios Avanzados',
        'Comunicaciones Tácticas'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuestros Diplomados
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Programas especializados de alto nivel en seguridad
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {diplomas.map((diploma) => (
            <div key={diploma.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gray-200">
                {/* Replace with actual image */}
                <div className="w-full h-full bg-gray-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{diploma.title}</h3>
                <p className="text-gray-600 mb-4">{diploma.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">Duración: {diploma.duration}</span>
                  <span className="text-sm text-gray-500">Módulos: {diploma.modules}</span>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Contenido Principal:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {diploma.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors duration-300">
                  Solicitar Información
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Diplomas; 