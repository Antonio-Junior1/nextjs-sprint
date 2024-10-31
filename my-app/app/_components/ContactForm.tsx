"use client";

export default function ContactForm() {
  return (
    <div className="w-full flex flex-col items-center mt-5">
      <h2 className="text-xl font-bold text-white">Fale Conosco</h2>
      <form className="flex flex-col w-full max-w-md mt-4">
        <label htmlFor="name" className="text-white mb-2">Nome:</label>
        <input type="text" id="name" className="p-2 mb-3 border rounded-md text-black" placeholder="Seu Nome" required />
        <label htmlFor="email" className="text-white mb-2">E-mail:</label>
        <input type="email" id="email" className="p-2 mb-3 border rounded-md text-black" placeholder="Seu E-mail" required />
        <label htmlFor="message" className="text-white mb-2">Mensagem:</label>
        <textarea id="message" className="p-2 mb-3 border rounded-md text-black" placeholder="Sua Mensagem" required />
        <button type="submit" className="px-6 py-2 bg-[#00A1FC] text-white rounded-md mt-4">
          Enviar
        </button>
      </form>
    </div>
  );
}
