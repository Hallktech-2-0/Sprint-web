// pages/contato.js
import Link from 'next/link';

const Contato = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">


      {/* Conteúdo da página de contato */}
      <section className="container mx-auto text-center py-24">
        <h2 className="text-3xl font-semibold mb-8">Entre em Contato</h2>
        
        {/* Formulário de Contato */}
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="nome" className="block text-sm font-medium text-gray-300">Nome</label>
            <input type="text" id="nome" name="nome" className="mt-1 p-2 w-full border rounded-md bg-gray-800 text-white" />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">E-mail</label>
            <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md bg-gray-800 text-white" />
          </div>
          
          <div className="mb-4">
            <label htmlFor="mensagem" className="block text-sm font-medium text-gray-300">Mensagem</label>
            <textarea id="mensagem" name="mensagem" rows="4" className="mt-1 p-2 w-full border rounded-md bg-gray-800 text-white"></textarea>
          </div>

          <button type="submit" className="bg-blue-500 text-white hover:bg-blue-600 py-3 px-6 rounded-full text-lg sm:text-xl transition duration-300 ease-in-out transform hover:scale-105">Enviar Mensagem</button>
        </form>
      </section>
    </div>
  );
};

export default Contato;
