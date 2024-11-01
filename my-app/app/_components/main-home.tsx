import Image from "next/image";
import { BotServico } from "./botao-servico";

export function MainHome() {
  return (
    <main className="bg-[#00A1FC] w-full h-full flex flex-col justify-center items-center">
      <div className="text-white flex items-center justify-between p-[200px_116px]">
        <section className="text-[50px] font-semibold w-[592px] min-h-[352px] flex flex-col text-start">
          <span>DESCUBRA O QUE ESTÁ ACONTECENDO COM SEU VEÍCULO</span>
          <span className="text-sm flex items-center text-black mt-3">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12.0859" cy="12" r="9" stroke="#7eff79" strokeWidth="2" />
              <path d="M8.08594 12L11.0859 15L16.0859 9" stroke="#9fff79" strokeWidth="2" />
            </svg>
            <p className="ml-2">Àgil prático e fácil</p>
          </span>
          <span className="text-sm flex items-center text-black mt-3">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12.0859" cy="12" r="9" stroke="#89ff79" strokeWidth="2" />
              <path d="M8.08594 12L11.0859 15L16.0859 9" stroke="#8fff79" strokeWidth="2" />
            </svg>
            <p className="ml-2">90% de satisfação pelo serviço oferecido</p>
          </span>
          <br />
          <BotServico />
        </section>
        <div className="relative w-[300px] h-[300px]"> {/* Define tamanho explícito para garantir visibilidade */}
          <Image
            src="/IMAGES/PortoMain.png"
            alt="Porto Main"
            fill
            style={{ objectFit: 'contain' }}/>
        </div>
      </div>
    </main>
  );
}
