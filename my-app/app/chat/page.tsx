"use client";

import { useState } from 'react';
import HeaderBasic from "../_components/header-basic";
import { SvgFooter } from "../_components/svg-footer";
import Script from "next/script";
import MainChat from '../_components/Mainchat';

export default function ChatHome() {
  const [sintoma, setSintoma] = useState('');
  const [previsao, setPrevisao] = useState('');
  const [erro, setErro] = useState('');

  const enviarSintoma = async () => {
    if (!sintoma) {
      setErro('Por favor, insira um sintoma.');
      return;
    }

    try {
      const response = await fetch('https://api-ia-3-xkjr.onrender.com/prever', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Sintoma: sintoma }),
      });

      if (!response.ok) {
        throw new Error('Erro na requisição: ' + response.statusText);
      }

      const data = await response.json();
      console.log(data);
      setPrevisao(data.previsao);
      setErro('');
    } catch (error) {
      console.error('Erro:', error);
      setErro(error instanceof Error ? `Erro ao obter previsão. Detalhes: ${error.message}` : 'Erro ao obter previsão. Verifique se o servidor está ativo.');
      setPrevisao('');
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#00A1FC]">
      <HeaderBasic />

      <MainChat/> 
      <div className="flex items-center justify-center p-10 bg-white m-10 rounded-lg shadow-lg text-black">
        <div className="w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-5">Diagnostico do seu problema </h2>
          <input
            className="text-black p-2 border rounded-md focus:outline-none focus:border-blue-500 w-full"
            type="text"
            value={sintoma}
            onChange={(e) => setSintoma(e.target.value)}
            placeholder="Digite um sintoma"
          />
          <button
            onClick={enviarSintoma}
            className="w-full p-2 bg-[#007bff] text-white rounded-md mt-3 hover:bg-blue-600 transition"
          >
            Enviar
          </button>

          {previsao && (
            <div className="mt-4">
              <h4 className="font-semibold">Previsão:</h4>
              <p>{previsao}</p>
            </div>
          )}
          {erro && (
            <div className="mt-4 text-red-500">
              <p>{erro}</p>
            </div>
          )}
        </div>
      </div>
         
      <SvgFooter />

      {/* Script do Watson Chat */}
      <Script id="watson-chat" strategy="afterInteractive">
        {`
          window.watsonAssistantChatOptions = {
            integrationID: "8afe2391-1b53-4800-857d-bc7a8820028f",
            region: "us-south",
            serviceInstanceID: "875f6872-0c58-4f4a-940d-ffabdca41c90",
            onLoad: async (instance) => { await instance.render(); }
          };
          setTimeout(function(){
            const t=document.createElement('script');
            t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
            document.head.appendChild(t);
          });
        `}
      </Script>
    </div>
  );
}
