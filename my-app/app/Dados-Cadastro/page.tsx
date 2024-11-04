"use client";
import { TipoCadastro } from '../types/types';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import HeaderBasic from '../_components/header-basic';
import { SvgFooter } from '../_components/svg-footer';

const Cadastro = () => {
    const [mensagemFeedback, setMensagemFeedback] = useState('');
    const router = useRouter();
    const [cadastros, setCadastros] = useState<TipoCadastro[]>([]);
    const [cadastro, setCadastro] = useState<TipoCadastro>({
        idCliente: 0,
        usuario: "",
        cadastro: "",
        email: "",
        senha: "",
        placa: "",
    });
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        chamadaApi();
    }, []);

    const chamadaApi = async () => {
        try {
            const response = await fetch('http://localhost:8080/cliente');
            const data = await response.json();
            setCadastros(data);
        } catch (error) {
            console.error("Falha na listagem", error);
        }
    };

    const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evento.target;
        setCadastro({ ...cadastro, [name]: value });
    };

    const handleSubmit = async (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();

        try {
            const method = isEditMode ? "PUT" : "POST";
            const url = isEditMode 
                ? `http://localhost:8080/cliente/${cadastro.idCliente}`
                : 'http://localhost:8080/cliente';

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    usuario: cadastro.usuario,
                    cadastro: cadastro.cadastro,
                    email: cadastro.email,
                    senha: cadastro.senha,
                    placa: cadastro.placa,
                })
            });

            if (response.ok) {
                setMensagemFeedback(isEditMode ? "Cadastro editado com sucesso!" : "Cadastro realizado com sucesso!");
                setCadastro({
                    idCliente: 0,
                    usuario: "",
                    cadastro: "",
                    email: "",
                    senha: "",
                    placa: "",
                });
                setIsEditMode(false);
                await chamadaApi();
                setTimeout(() => {
                    router.push("/cadastro");
                }, 2000);
            } else {
                const errorText = await response.json();
                setMensagemFeedback(`Erro: ${errorText.message || 'Erro desconhecido.'}`);
            }
        } catch (error) {
            if (error instanceof Error) {
                setMensagemFeedback(`Falha no processo: ${error.message}`);
            } else {
                setMensagemFeedback('Falha no processo: Um erro desconhecido ocorreu.');
            }
            console.error("Erro na requisição:", error);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:8080/cliente/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setMensagemFeedback("Cadastro removido com sucesso!");
                await chamadaApi();
                router.push("/cadastro");
            }
        } catch (error) {
            console.error("Falha ao remover cadastro.", error);
        }
    };

    const handleEdit = (cadastroSelecionado: TipoCadastro) => {
        setCadastro(cadastroSelecionado);
        setIsEditMode(true);
        window.scrollTo(0, 0); // Para rolar a página para o topo ao iniciar a edição
    };

    return (
        <div className='bg-black'>
            <HeaderBasic />
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 bg-[#00A1FC]">
                <section className="bg-white flex flex-col items-center p-10 rounded-lg shadow-lg w-96 transition-all duration-300 text-black">
                    <h2 className="text-2xl font-bold mb-5">{isEditMode ? "Edite o Cadastro" : "Cadastre um Cliente"}</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col w-full space-y-3">
                        <input
                            type="text"
                            name="usuario"
                            placeholder="Usuário"
                            value={cadastro.usuario}
                            onChange={handleChange}
                            required
                            className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
                            autoComplete="off"
                        />
                        <input
                            type="date"
                            name="cadastro"
                            value={cadastro.cadastro}
                            onChange={handleChange}
                            required
                            className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            value={cadastro.email}
                            onChange={handleChange}
                            required
                            className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
                            autoComplete="off"
                        />
                        <input
                            type="password"
                            name="senha"
                            placeholder="Senha"
                            value={cadastro.senha}
                            onChange={handleChange}
                            required
                            className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
                            autoComplete="off"
                        />
                        <input
                            type="text"
                            name="placa"
                            placeholder="Placa (AAA-1234 ou ABC1D23)"
                            value={cadastro.placa}
                            onChange={handleChange}
                            required
                            className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
                            pattern="^[A-Z]{3}-\d{4}$|^[A-Z]{3}\d[A-Z]\d{2}$"
                            title="Formato esperado: AAA-1234 ou ABC1D23"
                            autoComplete="off"
                        />
                        <button type="submit" className="w-full p-2 bg-[#007bff] text-white rounded-md mt-3 hover:bg-blue-600 transition">
                            {isEditMode ? "Atualizar" : "Enviar"}
                        </button>
                        <p className={`mt-4 text-sm ${mensagemFeedback.includes('sucesso') ? 'text-green-500' : 'text-red-500'}`}>
                            {mensagemFeedback}
                        </p>
                    </form>
                </section>
            </div>
            <div className="mt-10 bg-black max-w-6xl mx-auto py-10 px-5">
                <h2 className="text-3xl font-bold mb-5 text-center text-white">LISTAGEM DOS CADASTROS</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    <table className="w-full text-white">
                        <thead>
                            <tr className="bg-gray-800">
                                <th className="p-2">ID</th>
                                <th className="p-2">USUÁRIO</th>
                                <th className="p-2">DATA DE CADASTRO</th>
                                <th className="p-2">EMAIL</th>
                                <th className="p-2">PLACA</th>
                                <th className="p-2">AÇÕES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cadastros.map((c) => (
                                <tr key={c.idCliente} className="bg-gray-700 border-b border-gray-600">
                                    <td className="p-2">{c.idCliente}</td>
                                    <td className="p-2">{c.usuario}</td>
                                    <td className="p-2">{c.cadastro}</td>
                                    <td className="p-2">{c.email}</td>
                                    <td className="p-2">{c.placa}</td>
                                    <td className="p-2">
                                        <button className="mr-2 bg-yellow-500 text-black px-2 py-1 rounded" onClick={() => handleEdit(c)}>
                                            Editar
                                        </button>
                                        <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDelete(c.idCliente)}>
                                            Excluir
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className="bg-gray-800">
                                <td colSpan={6} className="p-2 text-center">Total de cadastros: {cadastros.length}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            <SvgFooter />
        </div>
    );
};

export default Cadastro;
