import React from 'react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Seguridad Privada',
      description: 'Formación integral en seguridad privada con enfoque en prevención y protección.',
      duration: '3 meses',
      level: 'Básico',
      image: '/images/security.jpg',
      price: 'S/ 1,200',
      schedule: 'Lunes a Viernes',
      time: '6:00 PM - 9:00 PM'
    },
    {
      id: 2,
      title: 'Ciberseguridad',
      description: 'Protección de sistemas informáticos y datos contra amenazas digitales.',
      duration: '4 meses',
      level: 'Intermedio',
      image: '/images/cybersecurity.jpg',
      price: 'S/ 1,500',
      schedule: 'Martes y Jueves',
      time: '7:00 PM - 10:00 PM'
    },
    {
      id: 3,
      title: 'Primeros Auxilios',
      description: 'Capacitación en atención de emergencias y primeros auxilios.',
      duration: '2 meses',
      level: 'Básico',
      image: '/images/first-aid.jpg',
      price: 'S/ 800',
      schedule: 'Sábados',
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
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl text-gray-400">📚</span>
                </div>
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
                <button className="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-primary-dark transition-colors duration-300 font-semibold shadow-md hover:shadow-lg">
                  Inscribirse Ahora
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