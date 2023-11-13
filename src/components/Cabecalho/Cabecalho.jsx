import Link from 'next/link';

const Cabecalho = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Haalk-Tech</h1>
        <ul className="flex space-x-4">
          <li><Link href="/">Início</Link></li>
          <li><Link href="/Login">Login</Link></li>
          <li><Link href="/Cadastro">Cadastro</Link></li>
          <li><Link href="/Bicicleta">Bike</Link></li>
          <li><Link href="/Contato">Contato</Link></li>
          <li><Link href="/Sobre">Sobre</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Cabecalho;
