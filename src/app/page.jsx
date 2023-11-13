import React from 'react';

const Inicio = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-gray-900 text-white min-h-screen">
      {/* Conteúdo da página inicial */}
      <div className="container mx-auto text-center py-24">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Bem-vindo à Haalk-Tech 
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">
          Especialistas em vistorias automatizadas e documentações de bicicletas.
        </p>
        <a href="#" className="bg-blue-500 text-white hover:bg-blue-600 py-3 px-6 rounded-full text-lg sm:text-xl transition duration-300 ease-in-out transform hover:scale-105">Obter Cotação</a>
      </div>
    </div>
  );
};

export default Inicio;
