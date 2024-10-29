import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Serviço Automotivo</title>
      </Head>

      <header className="flex justify-center w-full py-5 bg-white">
        <a href="/">
          <img src="/IMAGES/PORTOLOGO.PNG" alt="Logo Porto" className="w-64" />
        </a>
      </header>

      <main className="flex flex-col items-center bg-[#00A1FC] w-full min-h-screen">
        <div className="flex flex-col items-center justify-between text-white py-48 px-28 w-full">
          <section className="flex flex-col items-center text-center py-10">
            <h1 className="text-4xl font-bold">Serviços Mecânicos</h1>
            <p className="text-xl mt-4">
              Confiabilidade, qualidade e agilidade em nossos serviços de manutenção e reparação de veículos, tudo através da nossa IA.
            </p>
            <a
              href="/"
              className="mt-8 px-6 py-3 bg-white text-black rounded-full hover:bg-[#00A1FC] hover:text-white transition-colors duration-300 border-2"
            >
              Consultar Serviço
            </a>
          </section>

          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {['Manutenção Preventiva', 'Reparação de Motores', 'Troca de Peças'].map((service, index) => {
              let serviceImage = '';

              if (service === 'Manutenção Preventiva') {
                serviceImage = '/IMAGES/prevencao.png';
              } else if (service === 'Reparação de Motores') {
                serviceImage = '/IMAGES/Reparacao.png';
              } else if (service === 'Troca de Peças') {
                serviceImage = '/IMAGES/Trocadepc.png';
              }

              return (
                <div key={index} className="bg-white flex flex-col items-center p-5 border-2 rounded-lg w-1/3">
                  <img
                    src={serviceImage}
                    alt={service}
                    className="rounded-lg mb-4 hover:scale-110 transition-transform"
                    style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                  />
                  <h3 className="text-2xl font-bold text-black">{service}</h3>
                  <p className="mt-2 text-center text-black">
                    {service === 'Manutenção Preventiva' && 'Garanta a durabilidade e o desempenho do seu veículo com nossos serviços de manutenção preventiva.'}
                    {service === 'Reparação de Motores' && 'Contamos com especialistas em reparação de motores para resolver qualquer problema com eficiência.'}
                    {service === 'Troca de Peças' && 'Oferecemos a troca de peças originais e de qualidade para garantir a segurança e o desempenho do seu veículo.'}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <footer className="bg-black text-white py-5">
        <div className="flex flex-col items-center gap-12 max-w-4xl mx-auto py-5">
          <span className="text-2xl text-center">
            Ágil, prático e fácil
          </span>
          <span className="text-2xl text-center">
            Descubra seu problema sem sair de casa
          </span>
          <a href="/Servico" className="px-6 py-3 bg-white text-black rounded-full hover:bg-[#00A1FC] hover:text-white transition-colors duration-300">
            Conheça nosso serviço
          </a>

          <div className="w-full border-t border-gray-800 my-5 overflow-hidden" />

          <div className="flex flex-col items-center mt-5">
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

          <div className="w-full border-t border-gray-800 my-5 overflow-hidden" />
        </div>
      </footer>
    </>
  );
}
