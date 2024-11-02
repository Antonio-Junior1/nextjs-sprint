"use client";

import { useState } from 'react';
import HeaderBasic from '../_components/header-basic';
import Form from '../_components/Form';
import DeveloperCard from '../_components/DeveloperCard';

export default function Page() {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isRegistering) {
      alert('Cadastro realizado com sucesso!');
    } else {
      alert('Login feito com sucesso!');
    }
  };

  const toggleRegisterForm = () => {
    setIsRegistering(!isRegistering);
  };

  const developers = [
    {
      name: 'Antonio Junior',
      rm: '554518',
      email: 'AntonioJunior@Gmail.com',
      github: 'https://github.com/Antonio-Junior1',
      instagram: 'https://www.instagram.com/jrz__7/',
      image: '/images/Antonio.jpeg',
    },
    {
      name: 'Carlos Eduardo',
      rm: '555223',
      email: 'CarlosEduardo@Gmail.com',
      github: 'https://github.com/CarlosCampos84',
      instagram: 'https://www.instagram.com/c4duzin_n/',
      image: '/images/Cadu.jpeg',
    },
    {
      name: 'Felipe Pizzinato',
      rm: '555141',
      email: 'FelipePizzinato@Gmail.com',
      github: 'https://github.com/felipepizzinato',
      instagram: 'https://www.instagram.com/_pizzinato/',
      image: '/images/Felipe.jpeg',
    },
  ];

  return (
    <div className="flex flex-col items-center bg-black w-full min-h-screen">
      <HeaderBasic />
      <main className="bg-[#00A1FC] flex flex-col items-center justify-center w-full py-24 px-8 text-black">
        <Form
          isRegistering={isRegistering}
          toggleRegisterForm={toggleRegisterForm}
          handleFormSubmit={handleFormSubmit}
        />
      </main>
      <div className="mt-10 bg-black max-w-6xl mx-auto py-10 px-5">
        <h2 className="text-3xl font-bold mb-5 text-center">Desenvolvedores</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {developers.map((developer) => (
            <DeveloperCard key={developer.name} {...developer} />
          ))}
        </div>
      </div>
    </div>
  );
}