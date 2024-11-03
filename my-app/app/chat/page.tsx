"use client";

import { useState } from 'react';

export default function Chat() {
  const [sintoma, setSintoma] = useState('');
  const [previsao, setPrevisao] = useState('');
  const [erro, setErro] = useState('');

  const enviarSintoma = async () => {
    try {
      const response = await fetch('https://nextjs-sprint-yhab.vercel.app/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Sintoma: sintoma }),
      });

      if (!response.ok) {
        throw new Error('Erro na requisição');
      }

      const data = await response.json();
      setPrevisao(data.previsao);
      setErro('');
    } catch (error) {
      if (error instanceof Error) {
        setErro(`Erro ao obter previsão. Verifique se o servidor está ativo. Detalhes: ${error.message}`);
      } else {
        setErro('Erro ao obter previsão. Verifique se o servidor está ativo.');
      }
      setPrevisao('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Teste de IA para Previsão</h2>
      <input
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