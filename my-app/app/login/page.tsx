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

  return (
    <div className="flex flex-col items-center bg-[#00A1FC] w-full min-h-screen">
      <header className="flex justify-center w-full py-5 bg-white">
        <a href="/">
          <img src="/IMAGES/PORTOLOGO.PNG" alt="Logo Porto" className="w-64" />
        </a>
      </header>

      <main className="flex flex-col items-center justify-center w-full py-24 px-8 text-black " >
        <section className="bg-white flex flex-col items-center p-10 rounded-lg shadow-lg w-80 transition-all duration-300">
          <h2 className="text-2xl font-bold text-[#] mb-5">
            {isRegistering ? 'Cadastro' : 'Login'}
          </h2>
          <form onSubmit={handleFormSubmit} className="flex flex-col w-full">
            {/* Campos de login/cadastro */}
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

      <footer className="bg-black text-white py-5 w-full">
        <div className="w-full border-t border-gray-800"></div>
        <div className="flex flex-col items-center max-w-4xl mx-auto py-5">
          <h2 className="text-xl font-bold text-white">Fale Conosco</h2>
          <form className="flex flex-col w-full max-w-md mt-4">
            <label htmlFor="name" className="text-white mb-2">Nome:</label>
            <input 
              type="text" 
              id="name" 
              className="p-2 mb-3 border rounded-md text-black" 
              placeholder="Seu Nome" 
              required 
            />
            <label htmlFor="email" className="text-white mb-2">E-mail:</label>
            <input 
              type="email" 
              id="email" 
              className="p-2 mb-3 border rounded-md text-black" 
              placeholder="Seu E-mail" 
              required 
            />
            <label htmlFor="message" className="text-white mb-2">Mensagem:</label>
            <textarea 
              id="message" 
              className="p-2 mb-3 border rounded-md text-black" 
              placeholder="Sua Mensagem" 
              required 
            />
            <button 
              type="submit" 
              className="px-6 py-2 bg-[#00A1FC] text-white rounded-md mt-4"
            >
              Enviar
            </button>
          </form>
        </div>
        <div className="w-full border-t border-gray-800"></div>
      </footer>
    </div>
  );
}
