import Head from "next/head"; 
import Link from "next/link";
export  default function HeaderBasic (){
    return (
    <>    
        <Head>
          <title>Serviço Automotivo</title>
        </Head>
        <header className="flex justify-center w-full py-5 bg-white">
          <Link href="/">
            <img src="/IMAGES/PortoLogo.PNG" alt="Logo Porto" className="w-64" />
          </Link>
        </header>
    </> 
    )

}