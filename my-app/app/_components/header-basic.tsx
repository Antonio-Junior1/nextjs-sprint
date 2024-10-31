import Head from "next/head"; 
export  default function HeaderBasic (){
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
    </> 
    )

}