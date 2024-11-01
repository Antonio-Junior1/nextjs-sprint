"use client";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  service: string;
  serviceImage: string;
  description: string;
}

export function ServiceCard({ service, serviceImage, description }: ServiceCardProps) {
  return (
    <div className="bg-white flex flex-col items-center p-5 border-2 rounded-lg w-1/3">
      <Image
        src={serviceImage}
        alt={service}
        width={200} // Defina a largura da imagem
        height={200} // Defina a altura da imagem
        className="rounded-lg mb-4 hover:scale-110 transition-transform"
        style={{ objectFit: 'cover' }}
      />
      <h3 className="text-2xl font-bold text-black">{service}</h3>
      <p className="mt-2 text-center text-black">{description}</p>
    </div>
  );
}

export default function MainSection() {
  const services = [
    {
      name: 'Manutenção Preventiva',
      image: '/IMAGES/prevencao.png',
      description: 'Garanta a durabilidade e o desempenho do seu veículo com nossos serviços de manutenção preventiva.',
    },
    {
      name: 'Reparação de Motores',
      image: '/IMAGES/Reparacao.png',
      description: 'Contamos com especialistas em reparação de motores para resolver qualquer problema com eficiência.',
    },
    {
      name: 'Troca de Peças',
      image: '/IMAGES/TrocaDepc.png',
      description: 'Oferecemos a troca de peças originais e de qualidade para garantir a segurança e o desempenho do seu veículo.',
    },
  ];

  return (
    <main className="flex flex-col items-center bg-[#00A1FC] w-full min-h-screen">
      <div className="flex flex-col items-center justify-between text-white py-48 px-28 w-full">
        <section className="flex flex-col items-center text-center py-10">
          <h1 className="text-4xl font-bold">Serviços Mecânicos</h1>
          <p className="text-xl mt-4">
            Confiabilidade, qualidade e agilidade em nossos serviços de manutenção e reparação de veículos, tudo através da nossa IA.
          </p>
          <Link href="/"
            className="mt-8 px-6 py-3 bg-white text-black rounded-full hover:bg-opacity-90 hover:text-black transition-colors duration-300 border-2">
            Conheça nosso serviço
          </Link>
        </section>

        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service.name}
              serviceImage={service.image}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
