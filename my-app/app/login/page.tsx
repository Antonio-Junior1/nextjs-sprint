"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import HeaderBasic from '../_components/header-basic';
import { SvgFooter } from '../_components/svg-footer';

interface Usuario {
  usuario: string;
  senha: string;
}

const Login = () => {
  const [mensagem, setMensagem] = useState('');
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const router = useRouter();

  useEffect(() => {
    const user = sessionStorage.getItem("usuario");
    if (user) {
      router.push("/");
    }

    const chamadaApi = async () => {
      try {
        const response = await fetch('http://localhost:8080/usuario');
        if (!response.ok) {
          throw new Error('Erro ao buscar usuários');
        }
        const data: Usuario[] = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error("Falha na listagem", error);
      }
    };

    chamadaApi();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const usuarioEncontrado = usuarios.find(user => user.usuario === nomeUsuario);

    if (usuarioEncontrado && usuarioEncontrado.senha === senha) {
      sessionStorage.setItem("usuario", JSON.stringify(usuarioEncontrado));
      setMensagem("Login bem-sucedido!");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else {
      setMensagem("Nome de usuário ou senha inválidos.");
      setTimeout(() => {
        setMensagem('');
      }, 3000);
    }
  };

  return (
    <>
    <HeaderBasic/>
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 bg-[#00A1FC]">
      <section className="bg-white flex flex-col items-center p-10 rounded-lg shadow-lg w-80 transition-all duration-300 text-black">
        <h2 className="text-2xl font-bold mb-5">Bem-vindo!</h2>
        <form onSubmit={handleSubmit} className="flex flex-col w-full space-y-3">
          <input
            type="text"
            id="idNmUsu"
            name="nm_usuario"
            placeholder="Nome de usuário"
            required
            value={nomeUsuario}
            onChange={(e) => setNomeUsuario(e.target.value)}
            className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
            autoComplete="off"
          />

          <input
            type="password"
            id="idSenha"
            name="senha"
            placeholder="Senha"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
            autoComplete="off"
          />

          <button type="submit" className="w-full p-2 bg-[#007bff] text-white rounded-md mt-3 hover:bg-blue-600 transition">
            Entrar
          </button>
          <p className="mt-4 text-center">
            Não tem uma conta? <Link href="/cadastro" className="text-blue-500 hover:underline">Cadastre-se</Link>
          </p>
        </form>
        <p className={`mt-4 text-sm ${mensagem.includes('sucesso') ? 'text-green-500' : 'text-red-500'}`}>
          {mensagem}
        </p>
      </section>
    </div>
    <SvgFooter/>
    </>
  );
};

export default Login;
