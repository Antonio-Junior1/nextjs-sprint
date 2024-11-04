import Image from "next/image";
import { BotServico } from "./botao-servico";

export function MainHome() {
  return (
    <main className="bg-[#00A1FC] w-full min-h-screen flex flex-col justify-center items-center">
      <div className="text-white flex flex-col md:flex-row items-center justify-between p-8 md:p-16 lg:p-24 min-h-[600px] md:min-h-[800px] lg:min-h-[1000px]">
        <section className="text-[30px] md:text-[40px] lg:text-[50px] font-semibold w-full md:w-[592px] flex flex-col text-start mb-6 md:mb-0">
          <span>DESCUBRA O QUE ESTÁ ACONTECENDO COM SEU VEÍCULO</span>
          <span className="text-xs md:text-sm flex items-center text-black mt-2 md:mt-3">
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12.0859" cy="12" r="9" stroke="#7eff79" strokeWidth="2" />
              <path d="M8.08594 12L11.0859 15L16.0859 9" stroke="#9fff79" strokeWidth="2" />
            </svg>
            <p className="ml-2">Àgil, prático e fácil</p>
          </span>
          <span className="text-xs md:text-sm flex items-center text-black mt-2 md:mt-3">
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12.0859" cy="12" r="9" stroke="#89ff79" strokeWidth="2" />
              <path d="M8.08594 12L11.0859 15L16.0859 9" stroke="#8fff79" strokeWidth="2" />
            </svg>
            <p className="ml-2">90% de satisfação pelo serviço oferecido</p>
          </span>
          <br />
          <BotServico />
        </section>
        <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72">
          <Image
            src="/IMAGES/PortoMain.png"
            alt="Porto Main"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </main>
  );
}
