export default function MainChat() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center text-white p-8 relative min-h-[93vh]">
  <h1 className="text-5xl font-bold mb-6">Converse com a nossa IA!</h1>
  <p className="text-2xl mb-10">
    Clique no ícone de chat no canto inferior direito para começar a conversar.
  </p>

 
  <div className="absolute bottom-20 right-[100px] flex items-center space-x-2 animate-bounce">
    <span className="bg-white text-[#00A1FC] px-4 py-2 rounded-full shadow-lg font-semibold">
      Clique aqui! 💬
    </span>
    <div className="w-0 h-0 border-t-[16px] border-t-transparent border-l-[24px] border-l-white border-b-[16px] border-b-transparent"></div>
  </div>
</div>
  );
}
