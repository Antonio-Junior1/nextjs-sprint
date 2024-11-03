"use client";

import { useState } from 'react';

export default function Chat() {
  const [sintoma, setSintoma] = useState('');
  const [previsao, setPrevisao] = useState('');
  const [erro, setErro] = useState('');

  const enviarSintoma = async () => {
    // Verifica se o campo Sintoma está vazio
    if (!sintoma) {
      setErro('Por favor, insira um sintoma.');
      return;
    }

    try {
      // Fazendo a requisição para o endpoint da API
      const response = await fetch('https://api-ia-3-xkjr.onrender.com/prever', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Sintoma: sintoma }), // Corpo da requisição com o sintoma
      });

      // Verifica se a resposta é ok (status 200-299)
      if (!response.ok) {
        throw new Error('Erro na requisição: ' + response.statusText);
      }

      // Converte a resposta em JSON
      const data = await response.json();
      console.log(data); // Para ver a resposta no console

      // Define a previsão recebida da API
      setPrevisao(data.previsao);
      setErro(''); // Reseta a mensagem de erro
    } catch (error) {
      console.error('Erro:', error); // Log de erro detalhado
      if (error instanceof Error) {
        // Define a mensagem de erro com detalhes
        setErro(`Erro ao obter previsão. Detalhes: ${error.message}`);
      } else {
        setErro('Erro ao obter previsão. Verifique se o servidor está ativo.');
      }
      setPrevisao(''); // Reseta a previsão
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Teste de IA para Previsão</h2>
      <input
        className='text-black'
        type="text"
        value={sintoma}
        onChange={(e) => setSintoma(e.target.value)}
        placeholder="Digite um sintoma"
        style={{ padding: '8px', width: '80%' }}
      />
      <button onClick={enviarSintoma} style={{ marginLeft: '10px', padding: '8px 15px' }}>
        Enviar
      </button>

      {previsao && (
        <div style={{ marginTop: '20px' }}>
          <h4>Previsão:</h4>
          <p>{previsao}</p>
        </div>
      )}
      {erro && (
        <div style={{ color: 'red', marginTop: '20px' }}>
          <p>{erro}</p>
        </div>
      )}
    </div>
  );
}