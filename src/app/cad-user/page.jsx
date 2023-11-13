"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function CadUser() {
  const navigate = useRouter();

  const [usuario, setUsuario] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const [msg, setMsg] = useState("");
  const [classeLoginMsg, setClasseLoginMsg] = useState("");

  useEffect(() => {
    if (msg === "Cadastro realizado com sucesso!") {
      setClasseLoginMsg("login-sucesso");
    } else if (msg === "Ocorreu um erro no preenchimento.") {
      setClasseLoginMsg("login-erro");
    } else {
      setClasseLoginMsg("login-none");
    }
  }, [msg]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/base/base-cad", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuario),
      });

      if (response.ok) {
        const obj = await response.json();
        if (obj) {
          setMsg("Cadastro realizado com sucesso!");

          setTimeout(() => {
            setMsg("");
            navigate.push("/");
          }, 300);
        } else {
          setMsg("Ocorreu um erro no preenchimento.");
          setTimeout(() => {
            setMsg("");
            setUsuario((prevUsuario) => ({
              ...prevUsuario,
              senha: "", // Limpar a senha em caso de erro
            }));
          }, 5000);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover" style={{ backgroundImage: "url('/bike4.png')" }}>
      <div className="bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-semibold mb-8 text-white">Cadastro de Usuários</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="mb-4">
            <label htmlFor="idNome" className="block text-gray-400">
              Nome:
            </label>
            <input
              type="text"
              name="nome"
              id="idNome"
              placeholder="Digite seu Nome."
              value={usuario.nome}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-600 rounded-md focus:outline-none focus:border-blue-500 text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="idEmail" className="block text-gray-400">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="idEmail"
              placeholder="Digite seu Email."
              value={usuario.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-600 rounded-md focus:outline-none focus:border-blue-500 text-black"
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="idSenha" className="block text-gray-400">
              Senha:
            </label>
            <input
              type="password"
              name="senha"
              id="idSenha"
              placeholder="Digite sua Senha."
              value={usuario.senha}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-600 rounded-md focus:outline-none focus:border-blue-500 text-black"
            />
            <button
              type="button"
              className="absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-400 focus:outline-none"
              // handleToggleSenha
            >
              👁️
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white hover:bg-blue-600 py-3 px-6 rounded-full text-lg sm:text-xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              CADASTRAR
            </button>
          </div>
          <div className="mt-4">
            <p className="text-gray-400">
              Se você já possui registro,{" "}
              <Link href="/Login" className="text-blue-500">
                CLIQUE AQUI
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
