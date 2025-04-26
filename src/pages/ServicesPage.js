import React, { useState } from 'react';

const serviceDetails = [
  {
    title: "Seguridad y Salud en el Trabajo",
    details: "Ofrecemos programas completos de capacitación en Seguridad y Salud en el Trabajo (SST), alineados con la normativa nacional e internacional. Incluye identificación de riesgos, prevención de accidentes, manejo de equipos de protección personal y cumplimiento legal. Ideal para empresas que buscan proteger a sus colaboradores y evitar sanciones.",
  },
  {
    title: "Consultoría en Seguridad",
    details: "Brindamos asesoría especializada para implementar sistemas de gestión de seguridad efectivos. Analizamos tus procesos, identificamos vulnerabilidades y diseñamos soluciones a medida para reducir riesgos y mejorar la cultura de seguridad en tu organización.",
  },
  {
    title: "Certificaciones Profesionales",
    details: "Gestionamos y preparamos para certificaciones reconocidas en el sector de seguridad, avaladas por instituciones nacionales e internacionales. Aumenta la credibilidad y competitividad de tu empresa o perfil profesional.",
  },
  {
    title: "Auditorías de Seguridad",
    details: "Realizamos auditorías exhaustivas de tus sistemas y procedimientos de seguridad. Entregamos informes detallados con recomendaciones prácticas para corregir deficiencias y cumplir con los estándares exigidos por la ley.",
  },
  {
    title: "Capacitación Personalizada",
    details: "Diseñamos programas de formación adaptados a las necesidades específicas de tu empresa. Modalidad presencial, virtual o mixta. Incluye talleres prácticos, simulacros y evaluaciones para asegurar el aprendizaje efectivo.",
  },
  {
    title: "Gestión de Emergencias",
    details: "Elaboramos planes y protocolos de respuesta ante emergencias: incendios, sismos, evacuaciones y más. Entrenamos a tu personal para actuar con rapidez y eficacia, minimizando daños y salvando vidas.",
  },
];

const ServicesPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Seguridad y Salud en el Trabajo",
      description: "Programas completos de capacitación en SST, cumpliendo con todas las normativas vigentes.",
      icon: "🛡️"
    },
    {
      title: "Consultoría en Seguridad",
      description: "Asesoramiento especializado para implementar sistemas de gestión de seguridad efectivos.",
      icon: "📋"
    },
    {
      title: "Certificaciones Profesionales",
      description: "Certificaciones avaladas por instituciones reconocidas en el sector de seguridad.",
      icon: "📜"
    },
    {
      title: "Auditorías de Seguridad",
      description: "Evaluaciones completas de sistemas y procedimientos de seguridad existentes.",
      icon: "🔍"
    },
    {
      title: "Capacitación Personalizada",
      description: "Programas de formación adaptados a las necesidades específicas de su empresa.",
      icon: "👥"
    },
    {
      title: "Gestión de Emergencias",
      description: "Planes y protocolos de respuesta ante emergencias y situaciones críticas.",
      icon: "🚨"
    }
  ];

  const handleOpenModal = (index) => {
    setSelectedService(serviceDetails[index]);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales en seguridad y capacitación para empresas y profesionales
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <div className="text-4xl mb-4 text-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
              <div className="mt-6 text-center">
                <button
                  className="inline-flex items-center text-primary hover:text-primary-dark font-semibold transition-colors duration-300"
                  onClick={() => handleOpenModal(index)}
                >
                  Saber más
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalOpen && selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full relative animate-fade-in">
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
                onClick={handleCloseModal}
                aria-label="Cerrar"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-4 text-primary">{selectedService.title}</h3>
              <p className="text-gray-700 text-lg">{selectedService.details}</p>
            </div>
          </div>
        )}

        {/* Call to Action Section */}
        <div className="mt-16 bg-primary rounded-xl shadow-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            ¿Necesitas un servicio personalizado?
          </h3>
          <p className="text-lg mb-6">
            Contáctanos para discutir tus necesidades específicas y encontrar la mejor solución para tu empresa
          </p>
          <button
            className="bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            onClick={() => {
              const phone = '51947726382'; // Reemplaza con el número de WhatsApp de contacto
              const message = 'Hola, estoy interesado en los servicios de ISSEGUREX.';
              window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
            }}
          >
            Contactar Ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage; 