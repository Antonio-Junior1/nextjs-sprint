"use client";



interface FormProps {
  isRegistering: boolean;
  toggleRegisterForm: () => void;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form({
  isRegistering,
  toggleRegisterForm,
  handleFormSubmit,
}: FormProps) {
  return (
    <section className="bg-white flex flex-col items-center p-10 rounded-lg shadow-lg w-80 transition-all duration-300">
      <h2 className="text-2xl font-bold mb-5">
        {isRegistering ? 'Cadastro' : 'Login'}
      </h2>
      <form onSubmit={handleFormSubmit} className="flex flex-col w-full">
        {isRegistering && (
          <>
            <input
              type="text"
              placeholder="Nome"
              className="p-2 mb-3 border rounded-md"
              required={isRegistering}
            />
            <input
              type="email"
              placeholder="E-mail"
              className="p-2 mb-3 border rounded-md"
              required={isRegistering}
            />
          </>
        )}
        <input
          type="text"
          placeholder="Usuário"
          className="p-2 mb-3 border rounded-md"
          required
        />
        <input
          type="password"
          placeholder="Senha"
          className="p-2 mb-3 border rounded-md"
          required
        />
        <button
          type="submit"
          className="w-full p-2 bg-[#007bff] text-white rounded-md mt-3"
        >
          {isRegistering ? 'Cadastrar' : 'Entrar'}
        </button>
      </form>
      <button
        onClick={toggleRegisterForm}
        className="w-full p-2 bg-[#00A1FC] text-white rounded-md mt-4"
      >
        {isRegistering ? 'Voltar ao Login' : 'Cadastrar-se'}
      </button>
    </section>
  );
}
