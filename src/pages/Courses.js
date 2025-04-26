import React from 'react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Riesgo Eléctrico',
      description: 'Identificación, evaluación y control de riesgos eléctricos en el entorno laboral.',
      duration: '1 mes',
      level: 'Básico',
      image: '/images/RIESGO-electrico.jpg',
      price: 'S/ 110 + IGV',
      schedule: 'Día negociable',
      time: '7:00 PM - 9:00 PM'
    },
    {
      id: 2,
      title: 'Bloqueo y Etiquetado',
      description: 'Procedimientos seguros para el control de energías peligrosas (LOTO).',
      duration: '1 mes',
      level: 'Intermedio',
      image: '/images/LOTO.jpg',
      price: 'S/ 110 + IGV',
      schedule: 'Día negociable',
      time: '7:00 PM - 9:00 PM'
    },
    {
      id: 3,
      title: 'Trabajos en Altura',
      description: 'Capacitación en prevención de riesgos y técnicas seguras para trabajos en altura.',
      duration: '1 mes',
      level: 'Básico',
      image: '/images/trabajos-altura.jpg',
      price: 'S/ 110 + IGV',
      schedule: 'Día negociable',
      time: '6:00 PM - 10:00 PM'
    },
    {
      id: 4,
      title: 'Trabajos en Caliente',
      description: 'Gestión de riesgos y procedimientos seguros para trabajos con fuentes de calor.',
      duration: '1 mes',
      level: 'Intermedio',
      image: '/images/trabajos-caliente.png',
      price: 'S/ 110 + IGV',
      schedule: 'Día negociable',
      time: '9:00 AM - 1:00 PM'
    },
    {
      id: 5,
      title: 'Trabajos en Espacios Confinados',
      description: 'Prevención de riesgos y procedimientos seguros para trabajos en espacios confinados.',
      duration: '1 mes',
      level: 'Intermedio',
      image: '/images/espacio-confinado.jpg',
      price: 'S/ 110 + IGV',
      schedule: 'Día negociable',
      time: '9:00 AM - 1:00 PM'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Nuestros Cursos
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra amplia gama de cursos especializados en seguridad
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="relative h-48 bg-gray-200">
                <img
                  src={course.image}
                  alt={course.title}
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                    {course.level}
                  </span>
                  <span className="text-lg font-bold text-primary">{course.price}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{course.schedule}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>{course.time}</span>
                  </div>
                </div>
                <button
                  className="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-primary-dark transition-colors duration-300 font-semibold shadow-md hover:shadow-lg"
                  onClick={() => {
                    const phone = '51947726382'; // Reemplaza con el número de WhatsApp de contacto
                    const message = `Hola, quiero cotizar el curso: ${course.title}`;
                    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                >
                  Cotiza Ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses; 