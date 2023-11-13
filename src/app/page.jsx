import React from 'react';

const Inicio = () => {
  return (
<div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/bike5.png')" }}>      <div className="container mx-auto text-center py-24">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Bem-vindo à Haalk-Tech 
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">
          Especialistas em vistorias automatizadas e documentações de bicicletas.
        </p>
        <a href="https://www.portoseguro.com.br/seguro-bike?utm_source=google&utm_medium=cpl&utm_campaign=vs_bike_seguro-bike_hq_gro_bike-branding_google-ads_bike-branding_performance&utm_content=vs_bike_seguro-bike_hq_gro_bike-branding_google-ads_bike-branding_performance_key_bike-branding_search_23ugr80555he&ref=search_r90555&gad_source=1&gclid=Cj0KCQiAr8eqBhD3ARIsAIe-buN6UtdDQMSGqWMmIngj4qJqtqYKuoDUV2YvD1bi3KAw7wNRB98WPwoaAvtaEALw_wcB" className="bg-blue-500 text-white hover:bg-blue-600 py-3 px-6 rounded-full text-lg sm:text-xl transition duration-300 ease-in-out transform hover:scale-105">Obter Cotação</a>
      </div>

      {/* Planos */}
      <div className="container mx-auto text-center mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plano Essencial */}
          <div className="bg-gray-800 p-6 rounded-md">
            <h3 className="text-2xl font-semibold mb-4">Pedal Essencial</h3>
            <p className="text-gray-400">O plano gratuito* para você experimentar um dos serviços essenciais oferecidos, de acordo com as suas necessidades.</p>
          </div>

          {/* Plano Leve */}
          <div className="bg-gray-800 p-6 rounded-md">
            <h3 className="text-2xl font-semibold mb-4">Pedal Leve</h3>
            <p className="text-gray-400">Você gosta de pedalar e está buscando um plano de serviços intermediário? O Pedal leve da Porto é para você.</p>
          </div>

          {/* Plano Elite */}
          <div className="bg-gray-800 p-6 rounded-md">
            <h3 className="text-2xl font-semibold mb-4">Pedal Elite</h3>
            <p className="text-gray-400">Conte com diversos serviços capazes de elevar suas aventuras para o próximo nível.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
