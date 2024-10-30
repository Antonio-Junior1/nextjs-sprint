"use client"; // Diretiva para um componente cliente

import { useState } from 'react';

export default function Page() {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isRegistering) {
      alert('Cadastro realizado com sucesso!');
    } else {
      alert('Login feito com sucesso!');
    }
  };

  const toggleRegisterForm = () => {
    setIsRegistering(!isRegistering);
  };

  // Dados dos desenvolvedores com caminhos para o diretório público
  const developers = [
    {
      name: 'Antonio Junior',
      rm: '554518',
      email: 'AntonioJunior@Gmail.com',
      github: 'https://github.com/Antonio-Junior1',
      instagram: 'https://www.instagram.com/jrz__7/',
      image: '/images/Antonio.jpeg',
    },
    {
      name: 'Carlos Eduardo',
      rm: '555223',
      email: 'CarlosEduardo@Gmail.com',
      github: 'https://github.com/CarlosCampos84',
      instagram: 'https://www.instagram.com/c4duzin_n/',
      image: '/images/Cadu.jpeg',
    },
    {
      name: 'Felipe Pizzinato',
      rm: '555141',
      email: 'FelipePizzinato@Gmail.com',
      github: 'https://github.com/felipepizzinato',
      instagram: 'https://www.instagram.com/_pizzinato/',
      image: '/images/Felipe.jpeg',
    },
  ];

  return (
    <div className="flex flex-col items-center bg-black w-full min-h-screen">
      <header className="flex justify-center w-full py-5 bg-white">
        <a href="/">
          <img src="/IMAGES/PORTOLOGO.PNG" alt="Logo Porto" className="w-64" />
        </a>
      </header>

      <main className="bg-[#00A1FC] flex flex-col items-center justify-center w-full py-24 px-8 text-black">
        <section className="bg-white flex flex-col items-center p-10 rounded-lg shadow-lg w-80 transition-all duration-300">
          <h2 className="text-2xl font-bold mb-5">
            {isRegistering ? 'Cadastro' : 'Login'}
          </h2>
          <form onSubmit={handleFormSubmit} className="flex flex-col w-full">
            {isRegistering && (
              <>
                <input
                  type="text"
                  placeholder="Nome"
                  className="p-2 mb-3 border rounded-md"
                  required={isRegistering}
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="p-2 mb-3 border rounded-md"
                  required={isRegistering}
                />
              </>
            )}
            <input
              type="text"
              placeholder="Usuário"
              className="p-2 mb-3 border rounded-md"
              required
            />
            <input
              type="password"
              placeholder="Senha"
              className="p-2 mb-3 border rounded-md"
              required
            />
            <button
              type="submit"
              className="w-full p-2 bg-[#007bff] text-white rounded-md mt-3"
            >
              {isRegistering ? 'Cadastrar' : 'Entrar'}
            </button>
          </form>
          <button
            onClick={toggleRegisterForm}
            className="w-full p-2 bg-[#00A1FC] text-white rounded-md mt-4"
          >
            {isRegistering ? 'Voltar ao Login' : 'Cadastrar-se'}
          </button>
        </section>
      </main>


      
      <div className="mt-10 bg-black max-w-6xl mx-auto py-10 px-5">
        <h2 className="  text-3xl font-bold mb-5 text-center">Desenvolvedores</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {developers.map((developer) => (
            <div
              key={developer.name}
              className="flex flex-col items-center bg-white p-12 rounded-lg shadow-lg w-80"
            >
              <img src={developer.image} alt={`Foto de ${developer.name}`}className="w-full h-52 object-cover rounded-t-lg"
              />
              <h3 className=" text-black text-xl font-bold mt-3">{developer.name}</h3>
              <p className="text-gray-600">RM: {developer.rm}</p>
              <p className="text-gray-600">{developer.email}</p>
              <div className="flex mt-3">
                {developer.github && (
                  <a
                    href={developer.github}
                    className="mr-2 text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                <a
                  href={developer.instagram}
                  className="text-pink-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
