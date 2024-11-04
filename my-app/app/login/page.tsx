"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

// Definindo uma interface para o tipo de usuário
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
      router.push("");
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
    <div className="wrapper">
      <h2 className='login_h2'>Bem-vindo!</h2>
      <form onSubmit={handleSubmit} className="input-area">
        <input
          type="text"
          id="idNmUsu"
          name="nm_usuario"
          placeholder="Nome de usuário"
          required
          value={nomeUsuario}
          onChange={(e) => setNomeUsuario(e.target.value)}
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
          autoComplete="off"
        />

        <button type="submit" className="b_login">Entrar</button>
        <p>
          Não tem uma conta? <Link href="/cadastro" className="f_cadastro">Cadastre-se</Link>
        </p>
      </form>
      <p id="mensagem" className={mensagem.includes('sucesso') ? 'sucesso' : 'erro'}>{mensagem}</p>
    </div>
  );
};

export default Login;
