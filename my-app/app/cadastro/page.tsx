"use client";
import { TipoCadastro } from '../types/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Cadastro() {
    const [mensagemCadastro, setMensagemCadastro] = useState('');
    const navigate = useRouter();
    const [cadastro, setCadastro] = useState<TipoCadastro>({
        id_usuario: 0,
        nm_usuario: "",
        nm_cadastro: "",
        nm_email: "",
        nm_senha: "",
        nr_placa: "",
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/usuario", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cadastro),
            });

            if (response.ok) {
                setCadastro({
                    id_usuario: 0,
                    nm_usuario: "",
                    nm_cadastro: "",
                    nm_email: "",
                    nm_senha: "",
                    nr_placa: "",
                });
                setMensagemCadastro("Usuário cadastrado com sucesso!");
                navigate.push("/login");
            } else {
                const errorText = await response.json();
                setMensagemCadastro(`Erro ao cadastrar usuário: ${errorText.message || 'Erro desconhecido.'}`);
            }
        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error);
            if (error instanceof Error) {
                setMensagemCadastro(`Erro ao cadastrar usuário: ${error.message}`);
            } else {
                setMensagemCadastro('Erro ao cadastrar usuário: Erro no frontend.');
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4">
            <h2 className="text-3xl font-bold text-white mb-6">Cadastro</h2>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
                <input
                    type="text"
                    id="idNmUsu"
                    name="nm_usuario"
                    placeholder="Nome completo"
                    value={cadastro.nm_usuario}
                    onChange={(e) => setCadastro({ ...cadastro, nm_usuario: e.target.value })}
                    required
                    title="Informe seu nome de usuário."
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />

                <input
                    type="text"
                    id="idNm"
                    name="nm_cadastro"
                    placeholder="Nome completo"
                    value={cadastro.nm_cadastro}
                    onChange={(e) => setCadastro({ ...cadastro, nm_cadastro: e.target.value })}
                    required
                    title="Informe seu nome completo."
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />

                <input
                    type="email"
                    id="idEmail"
                    name="nm_email"
                    placeholder="Email"
                    value={cadastro.nm_email}
                    onChange={(e) => setCadastro({ ...cadastro, nm_email: e.target.value })}
                    required
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$"
                    title="Informe um email válido, por exemplo: usuario@dominio.com."
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />

                <input
                    type="password"
                    id="idSenha"
                    name="nm_senha"
                    placeholder="Senha"
                    value={cadastro.nm_senha}
                    onChange={(e) => setCadastro({ ...cadastro, nm_senha: e.target.value })}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />

                <input
                    type="text"
                    id="idPlaca"
                    name="nr_placa"
                    placeholder="Digite sua placa (AAA-1234 ou ABC1D23)"
                    value={cadastro.nr_placa}
                    onChange={(e) => setCadastro({ ...cadastro, nr_placa: e.target.value })}
                    required
                    pattern="^[A-Z]{3}-\d{4}$|^[A-Z]{3}\d[A-Z]\d{2}$"
                    title="Formato esperado: AAA-1234 ou ABC1D23"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />

                <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                    Cadastrar
                </button>
                <p className="text-center">
                    Já tem uma conta? <Link href="/login" className="text-blue-500 hover:underline">Faça login</Link>
                </p>
            </form>
            <p id="mensagemCadastro" className={`mt-4 ${mensagemCadastro.includes('sucesso') ? 'text-green-500' : 'text-red-500'}`}>
                {mensagemCadastro}
            </p>
        </div>
    );
}
