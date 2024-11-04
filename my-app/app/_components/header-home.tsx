import Image from 'next/image';

export function HeaderHome() {
  return (
    <header className="flex items-center justify-between w-full p-6 bg-white text-black">
      <div className="w-64 relative h-16">
        <Image
          src="/IMAGES/PortoLogo.png"
          alt="Logo Porto"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="ml-auto flex gap-4">
        <a href="/login">
          <button className="font-medium px-6 py-2 w-28 flex items-center justify-center cursor-pointer transition-colors hover:bg-blue-500 bg-blue-400 text-white border-2 border-blue-400 rounded-md">
            Log in
          </button>
        </a>
        <a href="/Dados-Cadastro">
          <button className="font-medium px-6 py-2 w-28 flex items-center justify-center cursor-pointer transition-colors hover:bg-blue-500 bg-blue-400 text-white border-2 border-blue-400 rounded-md">
            Dados cliente
          </button>
        </a>
      </div>
    </header>
  );
}
