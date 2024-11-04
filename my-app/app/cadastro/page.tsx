"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import HeaderBasic from '../_components/header-basic';
import { SvgFooter } from '../_components/svg-footer';

// Definindo a interface TipoCadastro de acordo com a resposta da API
interface TipoCadastro {
    usuario: string;
    nome: string; // Nome completo
    email: string;
    senha: string;
    placa: string;
}

export default function Cadastro() {
    const router = useRouter(); // Correção: Usando a variável `router` corretamente
    const [mensagemCadastro, setMensagemCadastro] = useState('');
    const [loading, setLoading] = useState(false);
    const [cadastro, setCadastro] = useState<TipoCadastro>({
        usuario: "",
        nome: "",
        email: "",
        senha: "",
        placa: "",
    });
    const [cadastros, setCadastros] = useState<TipoCadastro[]>([]);
    const [modoEdicao, setModoEdicao] = useState<string | null>(null);

    useEffect(() => {
        const fetchCadastros = async () => {
            try {
                const response = await fetch('http://localhost:8080/usuario');
                if (!response.ok) {
                    throw new Error('Erro ao buscar cadastros');
                }
                const data: TipoCadastro[] = await response.json();
                setCadastros(data);
            } catch (error) {
                console.error('Erro ao buscar cadastros:', error);
            }
        };

        fetchCadastros();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const url = modoEdicao ? `http://localhost:8080/usuario/${modoEdicao}` : "http://localhost:8080/usuario";
            const method = modoEdicao ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cadastro),
            });

            if (response.ok) {
                setMensagemCadastro(modoEdicao ? "Cadastro atualizado com sucesso!" : "Usuário cadastrado com sucesso!");
                setCadastro({ usuario: "", nome: "", email: "", senha: "", placa: "" });
                setModoEdicao(null);
                const updatedCadastros = await (await fetch('http://localhost:8080/usuario')).json();
                setCadastros(updatedCadastros);

                // Redireciona para a página de login após o cadastro, se não estiver no modo de edição
                if (!modoEdicao) {
                    setTimeout(() => {
                        router.push("/login");
                    }, 2000);
                }
            } else {
                const responseText = await response.text();
                const errorText = responseText ? JSON.parse(responseText) : {};
                setMensagemCadastro(`Erro: ${errorText.message || 'Erro desconhecido.'}`);
            }
        } catch (error) {
            console.error("Erro:", error);
            setMensagemCadastro(`Erro: ${error instanceof Error ? error.message : 'Erro desconhecido.'}`);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (usuario: string) => {
        try {
            const response = await fetch(`http://localhost:8080/usuario/${usuario}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setCadastros(cadastros.filter((c) => c.usuario !== usuario));
                setMensagemCadastro("Cadastro excluído com sucesso!");
            } else {
                throw new Error('Erro ao excluir o cadastro');
            }
        } catch (error) {
            console.error('Erro ao excluir cadastro:', error);
            setMensagemCadastro('Erro ao excluir cadastro. Tente novamente.');
        }
    };

    const iniciarEdicao = (cadastro: TipoCadastro) => {
        setCadastro(cadastro);
        setModoEdicao(cadastro.usuario);
        window.scrollTo(0, 0);
    };

    return (
        <div className='bg-black'>
            <HeaderBasic />
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 bg-[#00A1FC]">
                <section className="bg-white flex flex-col items-center p-10 rounded-lg shadow-lg w-80 transition-all duration-300 text-black">
                    <h2 className="text-2xl font-bold mb-5">{modoEdicao ? 'Editar Cadastro' : 'Cadastro'}</h2>
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
                            {loading ? 'Processando...' : modoEdicao ? 'Atualizar' : 'Cadastrar'}
                        </button>
                        {modoEdicao && (
                            <button
                                type="button"
                                onClick={() => {
                                    setModoEdicao(null);
                                    setCadastro({ usuario: "", nome: "", email: "", senha: "", placa: "" });
                                }}
                                className="w-full p-2 bg-gray-500 text-white rounded-md mt-2 hover:bg-gray-600 transition"
                            >
                                Cancelar
                            </button>
                        )}
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
                <h2 className="text-3xl font-bold mb-5 text-center">Gerenciamento de Cadastros</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {cadastros.map((dev) => (
                        <div key={dev.usuario} className="bg-white p-5 rounded-lg shadow-lg text-black">
                            <h3 className="font-bold">{dev.nome}</h3>
                            <p>Email: {dev.email}</p>
                            <p>Placa: {dev.placa}</p>
                            <button
                                className="mt-2 p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                                onClick={() => handleDelete(dev.usuario)}
                            >
                                Excluir
                            </button>
                            <button
                                className="mt-2 p-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
                                onClick={() => iniciarEdicao(dev)}
                            >
                                Editar
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <SvgFooter />
        </div>
    );
}
