import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Serviço Automotivo</title>
      </Head>

      {/* Header */}
      <header className="flex justify-center w-full py-5">
        <a href="/">
          <img src="/PortoLogo.png" alt="Logo Porto" width="300" height="60" />
        </a>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center bg-blue-500 w-full min-h-screen">
        <div className="flex flex-col items-center justify-between text-black py-48 px-28 w-full">
          {/* Hero Section */}
          <section className="flex flex-col items-center text-center py-10  text-white">
            <h1 className="text-4xl font-bold">Serviços Mecânicos</h1>
            <p className="text-xl mt-4">
              Confiabilidade, qualidade e agilidade em nossos serviços de manutenção e reparação de veículos tudo através da nossa IA.
            </p>
            <a
            href="/"
            className="mt-8 px-6 py-3 bg-white text-black rounded-full hover:bg-blue-500 hover: text--500 transition-colors duration-300 border 2">Consultar Serviço
            </a>

          </section>

          {/* Services Section */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {['Manutenção Preventiva', 'Reparação de Motores', 'Troca de Peças'].map((service, index) => (
              <div key={index} className=" bg-white flex flex-col items-center p-5 border-2 border- rounded-lg w-1/3">
                <img src="/ServicoIMG.jpg" alt={service} className="rounded-lg mb-4 hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold">{service}</h3>
                <p className="mt-2 text-center">
                  {service === 'Manutenção Preventiva' && 'Garanta a durabilidade e o desempenho do seu veículo com nossos serviços de manutenção preventiva.'}
                  {service === 'Reparação de Motores' && 'Contamos com especialistas em reparação de motores para resolver qualquer problema com eficiência.'}
                  {service === 'Troca de Peças' && 'Oferecemos a troca de peças originais e de qualidade para garantir a segurança e o desempenho do seu veículo.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-5">
        <div className="flex flex-col items-center gap-12 max-w-4xl mx-auto py-5">
          <span className="text-2xl text-center">
            Ágil, prático e fácil
          </span>
          <span className="text-2xl text-center">
            Descubra seu problema sem sair de casa
          </span>
          <a href="/Servico" className="px-6 py-3 bg-white text-black rounded-full">
            Conheça nosso serviço
          </a>

          <div className="w-full border-t border-gray-800 my-5" />

          {/* Icons Section */}
          <div className="flex justify-between items-center my-12 mx-[200px] box-border">
            <div className="flex gap-5">
              <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2012_82)">
                  <path d="M40 20.1493C40 9.1036 31.0457 0.149292 20 0.149292C8.9543 0.149292 0 9.1036 0 20.1493C0 31.195 8.9543 40.1493 20 40.1493C31.0457 40.1493 40 31.195 40 20.1493Z" fill="white" fillOpacity="0.12"/>
                  <path d="M21.6649 18.8056L28.1796 11.3993H26.6359L20.9791 17.83L16.461 11.3993H11.25L18.0822 21.1237L11.25 28.8903H12.7939L18.7676 22.0992L23.539 28.8903H28.75L21.6649 18.8056Z" fill="white"/>
                </g>
              </svg>

              <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2012_97)">
                  <path d="M40.9844 20.1493C40.9844 9.1036 32.0301 0.149292 20.9844 0.149292C9.93868 0.149292 0.984375 9.1036 0.984375 20.1493C0.984375 31.195 9.93868 40.1493 20.9844 40.1493C32.0301 40.1493 40.9844 31.195 40.9844 20.1493Z" fill="white" fillOpacity="0.12"/>
                  <path d="M17.1527 20.1493C17.1527 18.0323 18.8684 16.3157 20.9854 16.3157C23.1024 16.3157 24.819 18.0323 24.819 20.1493C24.819 22.2663 23.1024 23.9829 20.9854 23.9829C18.8684 23.9829 17.1527 22.2663 17.1527 20.1493Z" fill="white"/>
                </g>
              </svg>

              <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2012_94)">
                  <path d="M40.6562 20.1493C40.6562 9.1036 31.7019 0.149292 20.6562 0.149292C9.61055 0.149292 0.65625 9.1036 0.65625 20.1493C0.65625 31.195 9.61055 40.1493 20.6562 40.1493C31.7019 40.1493 40.6562 31.195 40.6562 20.1493Z" fill="white" fillOpacity="0.12"/>
                  <path d="M26.1558 10.1493H23.1558C21.8297 10.1493 20.558 10.6761 19.6203 11.6138C18.6826 12.5515 18.1558 13.8232 18.1558 15.1493V18.1493H15.1558V22.1493H18.1558V30.1493H22.1558V22.1493H25.1558L26.1558 18.1493H22.1558V15.1493C22.1558 14.8841 22.2612 14.6297 22.4487 14.4422C22.6363 14.2547 22.8906 14.1493 23.1558 14.1493H26.1558V10.1493Z" fill="white"/>
                </g>
              </svg>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center mt-5">
            <h2 className="text-xl font-bold text-black">Fale Conosco</h2>
            <form className="flex flex-col w-full max-w-md mt-4">
              <label htmlFor="name" className="text-black mb-2">Nome:</label>
              <input type="text" id="name" className="p-2 mb-3 border rounded-md text-black" placeholder="Seu Nome" required />
              <label htmlFor="email" className="text-black mb-2">E-mail:</label>
              <input type="email" id="email" className="p-2 mb-3 border rounded-md text-black" placeholder="Seu E-mail" required />
              <label htmlFor="message" className="text-black mb-2">Mensagem:</label>
              <textarea id="message" className="p-2 mb-3 border rounded-md text-black" placeholder="Sua Mensagem" required />
              <button type="submit" className="px-6 py-2 bg-blue-700 text-white rounded-md mt-4">
                Enviar
              </button>
            </form>
          </div>

          <div className="w-full border-t border-gray-800 my-5" />
        </div>
      </footer>
    </>
  );
}
