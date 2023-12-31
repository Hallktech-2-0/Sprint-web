"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {
  const navigate = useRouter();
  const [usuario, setUsuario] = useState({
    email: "",
    senha: "",
  });
  const [msg, setMsg] = useState("");
  const [classeLoginMsg, setClasseLoginMsg] = useState("");

  useEffect(() => {
    if (msg === "Usuário Validado com Sucesso!") {
      setClasseLoginMsg("login-sucesso");
      setTimeout(() => {
        navigate.push("/");
      }, 5000);
    } else if (msg === "Usuário e ou Senha inválidos!!") {
      setClasseLoginMsg("login-erro");
    } else {
      setClasseLoginMsg("login-none");
    }
  }, [msg, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3000/api/base/base-users/0",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(usuario),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Server Response Data:", data);

        if (data.status) {
          const token = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
          sessionStorage.setItem("token-user", token);
          sessionStorage.setItem("obj-user", JSON.stringify(data.user));

          setMsg("Usuário Validado com Sucesso!");
          
          setTimeout(() => {
            setMsg("");
            navigate.push("/");
          }, 5000);
        } else {
          // Atualize a mensagem de acordo com o status 'false'
          setMsg("Usuário e/ou Senha inválidos. Verifique suas credenciais e tente novamente.");
          setTimeout(() => {
            setMsg("");
            setUsuario({
              email: "",
              senha: "",
            });
          }, 5000);
        }
      } else {
        // Lidar com outros cenários de erro na resposta do servidor
        setMsg("Erro ao processar a solicitação. Tente novamente mais tarde.");
        setTimeout(() => {
          setMsg("");
        }, 5000);
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-cover" style={{ backgroundImage: "url('/bike4.png')" }}>
      <div className="bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-semibold mb-8 text-white">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="mb-4">
            <label htmlFor="idEmail" className="block text-gray-400">Email:</label>
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
          <div className="mb-4">
            <label htmlFor="idSenha" className="block text-gray-400">Senha:</label>
            <input
              type="password"
              name="senha"
              id="idSenha"
              placeholder="Digite sua Senha."
              value={usuario.senha}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-600 rounded-md focus:outline-none focus:border-blue-500 text-black"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white hover:bg-blue-600 py-3 px-6 rounded-full text-lg sm:text-xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              LOGIN
            </button>
          </div>
          <div className="mt-4">
            <p className="text-gray-400">
              Se você ainda não possui registro.{" "}
              <Link href="/cad-user" className="text-blue-500">
                CLIQUE AQUI
              </Link>
            </p>
          </div>
          {/* Exibir a mensagem de erro */}
          <div className={`mt-4 ${classeLoginMsg}`}>
            <p className="text-gray-400">{msg}</p>
          </div>
        </form>
      </div>
    </div>
  );
}