"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

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

        // Log dos dados que estão sendo enviados
        console.log("Dados do cadastro:", cadastro);

        try {
            const response = await fetch("http://localhost:8080/usuario", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cadastro),
            });

            const responseText = await response.text(); // Obtenha a resposta como texto
            console.log("Resposta da API:", responseText); // Log da resposta

            if (response.ok) {
                const data = responseText ? JSON.parse(responseText) : {};
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

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4">
            <h2 className="text-3xl font-bold text-white mb-6">Cadastro</h2>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
                {/* Campos do formulário */}
                <input
                    type="text"
                    id="idNomeCompleto"
                    name="nm_completo"
                    placeholder="Nome Completo"
                    value={cadastro.nome}
                    onChange={(e) => setCadastro({ ...cadastro, nome: e.target.value })}
                    required
                    title="Informe seu nome completo."
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <input
                    type="text"
                    id="idNmUsu"
                    name="nm_usuario"
                    placeholder="Nome de Usuário"
                    value={cadastro.usuario}
                    onChange={(e) => setCadastro({ ...cadastro, usuario: e.target.value })}
                    required
                    title="Informe seu nome de usuário."
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <input
                    type="email"
                    id="idEmail"
                    name="nm_email"
                    placeholder="Email"
                    value={cadastro.email}
                    onChange={(e) => setCadastro({ ...cadastro, email: e.target.value })}
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
                    value={cadastro.senha}
                    onChange={(e) => setCadastro({ ...cadastro, senha: e.target.value })}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <input
                    type="text"
                    id="idPlaca"
                    name="nr_placa"
                    placeholder="Digite sua placa (AAA1234 ou ABC1D23)"
                    value={cadastro.placa}
                    onChange={(e) => setCadastro({ ...cadastro, placa: e.target.value })}
                    required
                    pattern="^[A-Z]{3}\d{4}$|^[A-Z]{3}\d[A-Z]\d{2}$"
                    title="Formato esperado: AAA1234 ou ABC1D23"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition" disabled={loading}>
                    {loading ? 'Cadastrando...' : 'Cadastrar'}
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
