import { SvgFooter } from "./_components/svg-footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      
      <header className="flex items-center justify-between w-full p-6 bg-white text-black">
        <img src="/IMAGES/PORTOLOGO.PNG" alt="Logo Porto" className="w-64" />
        <a href="/login">
          <button className="font-medium p-4 w-28 h-10 flex items-center justify-center rounded-full cursor-pointer transition-colors hover:bg-blue-400 border-2">
            Log in
          </button>
        </a>
      </header>
      <main className="bg-[#00A1FC] w-full h-full flex flex-col justify-center items-center">
      <div className="text-white flex items-center justify-between p-[200px_116px]">
        <section className="text-[50px] font-semibold w-[592px] min-h-[352px] flex flex-col text-start">
          <span>DESCUBRA O QUE ESTÁ ACONTECENDO COM SEU VEÍCULO</span>
          <span className="text-sm flex items-center text-black mt-3">
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12.0859" cy="12" r="9" stroke="#7eff79" strokeWidth="2"/><path d="M8.08594 12L11.0859 15L16.0859 9" stroke="#9fff79" strokeWidth="2"/></svg>

            <p className="ml-2">Àgil prático e fácil</p>
          </span>
          <span className="text-sm flex items-center text-black mt-3">
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12.0859" cy="12" r="9" stroke="#89ff79" strokeWidth="2"/><path d="M8.08594 12L11.0859 15L16.0859 9" stroke="#8fff79" strokeWidth="2"/></svg>
            <p className="ml-2">90% de satisfação pelo serviço oferecido</p>
          </span>
          <br />
          <a href="/servico">
            <button className="text-xl font-light
             py-2 w-[253px] h-[56px] flex items-center justify-center rounded-full bg-white cursor-pointer transition-colors duration-300 hover:bg-gray-300 text-black">
              Conheça nosso serviço
            </button>
          </a>
        </section>
        <div className="w-25% h-25% p-0 mt-120px">
        <img src="/images/Portomain.png" alt="Porto Main " />
        </div>
      </div>
    </main>
    
    <SvgFooter/>
     
    </div>
  );
}