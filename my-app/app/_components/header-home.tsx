import Image from 'next/image';

export function HeaderHome() {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between w-full p-4 md:p-6 bg-white text-black">
      <div className="w-48 h-12 md:w-64 md:h-16 relative">
        <Image
          src="/IMAGES/PortoLogo.png"
          alt="Logo Porto"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full md:w-auto mt-4 md:mt-0">
        <a href="/login" className="w-full md:w-auto">
          <button className="font-medium px-4 py-2 md:px-6 md:py-2 w-full md:w-28 flex items-center justify-center cursor-pointer transition-colors hover:bg-blue-500 bg-blue-400 text-white border-2 border-blue-400 rounded-md">
            Log in
          </button>
        </a>
        <a href="/Dados-Cadastro" className="w-full md:w-auto">
          <button className="font-medium px-4 py-2 md:px-6 md:py-2 w-full md:w-28 flex items-center justify-center cursor-pointer transition-colors hover:bg-blue-500 bg-blue-400 text-white border-2 border-blue-400 rounded-md">
            Dados cliente
          </button>
        </a>
      </div>
    </header>
  );
}
