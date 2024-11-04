"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import HeaderBasic from '../_components/header-basic';

import { SvgFooter } from '../_components/svg-footer';
import DeveloperCard from '../_components/DeveloperCard';

// Definindo a interface TipoCadastro de acordo com a resposta da API
interface TipoCadastro {
    usuario: string;
    nome: string; // Nome completo
    email: string;
    senha: string;
    placa: string;
}

export default function Cadastro() {
    const [mensagemCadastro, setMensagemCadastro] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useRouter();
    const [cadastro, setCadastro] = useState<TipoCadastro>({
        usuario: "",
        nome: "",
        email: "",
        senha: "",
        placa: "",
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        console.log("Dados do cadastro:", cadastro);

        try {
            const response = await fetch("http://localhost:8080/usuario", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cadastro),
            });

            const responseText = await response.text();
            console.log("Resposta da API:", responseText);

            if (response.ok) {
                setCadastro({
                    usuario: "",
                    nome: "",
                    email: "",
                    senha: "",
                    placa: "",
                });
                setMensagemCadastro("Usuário cadastrado com sucesso!");
                setTimeout(() => {
                    navigate.push("/login");
                }, 2000);
            } else {
                console.error(`Erro ao cadastrar: Status ${response.status}`, responseText);
                const errorText = responseText ? JSON.parse(responseText) : {};
                setMensagemCadastro(`Erro ao cadastrar usuário: ${errorText.message || 'Erro desconhecido.'}`);
            }
        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error);
            setMensagemCadastro(`Erro ao cadastrar usuário: ${error instanceof Error ? error.message : 'Erro desconhecido.'}`);
        } finally {
            setLoading(false);
        }
    };


    const developers = [
        {
          name: 'Antonio Junior',
          rm: '554518',
          email: 'AntonioJunior@Gmail.com',
          github: 'https://github.com/Antonio-Junior1',
          instagram: 'https://www.instagram.com/jrz__7/',
          image: '/IMAGES/Antonio.jpeg',
        },
        {
          name: 'Carlos Eduardo',
          rm: '555223',
          email: 'CarlosEduardo@Gmail.com',
          github: 'https://github.com/CarlosCampos84',
          instagram: 'https://www.instagram.com/c4duzin_n/',
          image: '/IMAGES/Cadu.jpeg',
        },
        {
          name: 'Felipe Pizzinato',
          rm: '555141',
          email: 'FelipePizzinato@Gmail.com',
          github: 'https://github.com/felipepizzinato',
          instagram: 'https://www.instagram.com/_pizzinato/',
          image: '/iMAGES/Felipe.jpeg',
        },
      ];

    return (
        <div className='bg-black'>
        <HeaderBasic/>
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 bg-[#00A1FC]">
            <section className="bg-white flex flex-col items-center p-10 rounded-lg shadow-lg w-80 transition-all duration-300 text-black">
                <h2 className="text-2xl font-bold mb-5">Cadastro</h2>
                <form onSubmit={handleSubmit} className="flex flex-col w-full space-y-3">
                    <input
                        type="text"
                        placeholder="Nome Completo"
                        value={cadastro.nome}
                        onChange={(e) => setCadastro({ ...cadastro, nome: e.target.value })}
                        required
                        className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Nome de Usuário"
                        value={cadastro.usuario}
                        onChange={(e) => setCadastro({ ...cadastro, usuario: e.target.value })}
                        required
                        className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={cadastro.email}
                        onChange={(e) => setCadastro({ ...cadastro, email: e.target.value })}
                        required
                        className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={cadastro.senha}
                        onChange={(e) => setCadastro({ ...cadastro, senha: e.target.value })}
                        required
                        className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Digite sua placa (AAA1234 ou ABC1D23)"
                        value={cadastro.placa}
                        onChange={(e) => setCadastro({ ...cadastro, placa: e.target.value })}
                        required
                        pattern="^[A-Z]{3}\d{4}$|^[A-Z]{3}\d[A-Z]\d{2}$"
                        title="Formato esperado: AAA1234 ou ABC1D23"
                        className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <button
                        type="submit"
                        className="w-full p-2 bg-[#007bff] text-white rounded-md mt-3 hover:bg-blue-600 transition"
                        disabled={loading}
                    >
                        {loading ? 'Cadastrando...' : 'Cadastrar'}
                    </button>
                </form>
                <Link href="/login" className="w-full p-2 bg-[#00A1FC] text-white rounded-md mt-4 text-center hover:bg-blue-500 transition">
                    Voltar ao Login
                </Link>
                <p className={`mt-4 text-sm ${mensagemCadastro.includes('sucesso') ? 'text-green-500' : 'text-red-500'}`}>
                    {mensagemCadastro}
                </p>
            </section>
        </div>
        <div className="mt-10 bg-black max-w-6xl mx-auto py-10 px-5">
        <h2 className="text-3xl font-bold mb-5 text-center">Desenvolvedores</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {developers.map((developer) => (
            <DeveloperCard key={developer.name} {...developer} />
          ))}
        </div>
      </div>
        <SvgFooter/>
        </div>
    );
}
