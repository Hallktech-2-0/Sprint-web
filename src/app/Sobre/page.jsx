import React from "react";

const Sobre = () => {
  return (
    <div className="bg-cover" style={{ backgroundImage: "url('/bike5.png')" }}>
      {/* Container 1 */}
      <div className="container mx-auto text-center py-24">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Sobre a Haalk-Tech
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">
          Seja bem-vindo à HaalkTech, sua parceira inovadora no universo da vistoria automatizada para bicicletas. Na vanguarda da tecnologia, estamos transformando a experiência de seguros, oferecendo vistorias automatizadas que unem praticidade e segurança.
        </p>
        <a href="#" className="bg-blue-500 text-white hover:bg-blue-600 py-3 px-6 rounded-full text-lg sm:text-xl transition duration-300 ease-in-out transform hover:scale-105">Obter Cotação</a>
      </div>

      {/* Container 2 */}
      <div className="container mx-auto text-center py-16">
        <p className="text-lg sm:text-xl md:text-2xl mb-8">
          Nosso compromisso é simplificar o processo de vistoria, eliminando a necessidade de deslocamento até uma seguradora. Por meio de um processo intuitivo que utiliza inteligência artificial, serão realizadas inspeções precisas e rápidas, identificando potenciais danos e protegendo o que mais importa para você, ou seja, sua bicicleta.
        </p>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">
          Na HaalkTech, acreditamos na transparência e confiabilidade. Oficializamos a ligação entre proprietário e seguro usando o número de série da bicicleta, reduzindo as chances de fraudes e proporcionando segurança adicional aos nossos clientes. Nossa plataforma intuitiva guia você pelo processo de vistoria, tornando-o simples e eficaz.
        </p>
      </div>

      {/* Container 3 */}
      <div className="container mx-auto text-center py-16">
        <p className="text-lg sm:text-xl md:text-2xl mb-8">
          Somos mais do que uma empresa de seguros; somos seus parceiros na garantia da segurança e integridade da sua bicicleta. Confie na HaalkTech para uma experiência de seguros inovadora e sem preocupações.
        </p>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">
          Pedale com confiança, pedale com a HaalkTech - Inovação e Proteção a cada pedalada.
        </p>
      </div>

      {/* Container 4 - Conheça Nossa Equipe */}
      <div className="container mx-auto text-center py-24">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Conheça Nossa Equipe
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {equipe.map((membro) => (
            <div key={membro.nome} className="p-6 bg-gray-800 rounded-md">
              <h3 className="text-xl font-bold mb-2">{membro.nome}</h3>
              <p className="text-gray-400">{membro.cargo}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const equipe = [
  { nome: "Aleck Ramos Cappucci", cargo: "Desenvolvedor Frontend" },
  { nome: "Giovanna Alvarez Dos Santos", cargo: "Gerente de Projetos" },
  { nome: "Sarah Oliveira Souza Rosa", cargo: "Desenvolvedora Python" },
  { nome: "Murilo Carlos Matos dos Santos", cargo: "Desenvolvedor Java" },
  { nome: "Gabriel Lima", cargo: "Desenvolvedor Frontend" },
];

export default Sobre;
