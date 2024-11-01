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
      <a href="/login">
        <button className="font-medium p-4 w-28 h-10 flex items-center justify-center rounded-full cursor-pointer transition-colors hover:bg-blue-400 border-2">
          Log in
        </button>
      </a>
    </header>
  );
}
