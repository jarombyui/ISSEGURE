import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Tendencias en Seguridad 2024',
      excerpt: 'Descubre las últimas tendencias y tecnologías en el mundo de la seguridad.',
      date: '15 de Marzo, 2024',
      author: 'Equipo ISSEGUR',
      category: 'Seguridad',
      image: '/images/blog-trends.jpg',
      readTime: '5 min',
      tags: ['Seguridad', 'Tendencias', '2024']
    },
    {
      id: 2,
      title: 'Importancia de la Ciberseguridad en Empresas',
      excerpt: 'Cómo proteger tu empresa de las amenazas digitales más comunes.',
      date: '10 de Marzo, 2024',
      author: 'Juan Pérez',
      category: 'Ciberseguridad',
      image: '/images/blog-cyber.jpg',
      readTime: '7 min',
      tags: ['Ciberseguridad', 'Empresas', 'Protección']
    },
    {
      id: 3,
      title: 'Nuevos Protocolos de Seguridad Física',
      excerpt: 'Actualizaciones en los protocolos de seguridad física para el 2024.',
      date: '5 de Marzo, 2024',
      author: 'María González',
      category: 'Seguridad Física',
      image: '/images/blog-physical.jpg',
      readTime: '4 min',
      tags: ['Protocolos', 'Seguridad Física', 'Actualización']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Blog ISSEGUR
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Mantente informado sobre las últimas novedades en seguridad
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="relative h-48 bg-gray-200">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl text-gray-400">📰</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime} de lectura</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                      <span className="text-gray-500">👤</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{post.author}</p>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </div>
                  <button className="text-primary hover:text-primary-dark transition-colors duration-300 font-semibold">
                    Leer más →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-300 font-semibold shadow-md hover:shadow-lg">
            Ver más artículos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog; 