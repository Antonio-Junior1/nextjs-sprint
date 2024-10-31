export function HeaderHome (){
    return (
        <header className="flex items-center justify-between w-full p-6 bg-white text-black">
        <img src="/IMAGES/PORTOLOGO.PNG" alt="Logo Porto" className="w-64" />
        <a href="/login">
          <button className="font-medium p-4 w-28 h-10 flex items-center justify-center rounded-full cursor-pointer transition-colors hover:bg-blue-400 border-2">
            Log in
          </button>
        </a>
      </header>

    )

}