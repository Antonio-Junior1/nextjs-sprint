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
    <footer className="bg-black w-full min-h-[350px] py-5 box-border">
      
      <div className="flex flex-col items-center bg-black text-white gap-12 max-w-[1000px] mx-auto h-full">
        <span className="text-[28px] text-center max-w-[600px] my-2 leading-snug">
          Ágil, prático e fácil
        </span>
        <span className="text-[28px] text-center max-w-[600px] my-2 leading-snug">
          Descubra seu problema sem sair de casa
        </span>
        <a href="/servico">
          <button className="font-medium w-[260px] h-14 rounded-full bg-white text-black flex items-center justify-center my-5 transition-colors duration-300 hover:bg-gray-300">
            Conheça nosso serviço
          </button>
        </a>
      </div>

      
      <div className="w-full border-t border-gray-800"></div>

      
      <div className="flex justify-between items-center my-12 mx-[200px] box-border">
        <div className="flex gap-5">
        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2012_82)"><path d="M40 20.1493C40 9.1036 31.0457 0.149292 20 0.149292C8.9543 0.149292 0 9.1036 0 20.1493C0 31.195 8.9543 40.1493 20 40.1493C31.0457 40.1493 40 31.195 40 20.1493Z" fill="white" fillOpacity="0.12"/><mask id="mask0_2012_82"  maskUnits="userSpaceOnUse" x="11" y="11" width="18" height="18"><path d="M28.75 11.3993H11.25V28.8993H28.75V11.3993Z" fill="white"/></mask><g mask="url(#mask0_2012_82)"><path d="M21.6649 18.8056L28.1796 11.3993H26.6359L20.9791 17.83L16.461 11.3993H11.25L18.0822 21.1237L11.25 28.8903H12.7939L18.7676 22.0992L23.539 28.8903H28.75L21.6649 18.8056ZM19.5503 21.2094L18.8581 20.2411L13.3502 12.5359H15.7215L20.1664 18.7542L20.8587 19.7226L26.6366 27.8054H24.2653L19.5503 21.2094Z" fill="white"/></g></g><defs><clipPath id="clip0_2012_82"><rect width="40" height="40" fill="white" transform="translate(0 0.149292)"/></clipPath></defs></svg>
        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_2012_97)">
          <path d="M40.9844 20.1493C40.9844 9.1036 32.0301 0.149292 20.9844 0.149292C9.93868 0.149292 0.984375 9.1036 0.984375 20.1493C0.984375 31.195 9.93868 40.1493 20.9844 40.1493C32.0301 40.1493 40.9844 31.195 40.9844 20.1493Z" fill="white" fillOpacity="0.12"/>
          <path d="M17.1527 20.1493C17.1527 18.0323 18.8684 16.3157 20.9854 16.3157C23.1024 16.3157 24.819 18.0323 24.819 20.1493C24.819 22.2663 23.1024 23.9829 20.9854 23.9829C18.8684 23.9829 17.1527 22.2663 17.1527 20.1493ZM15.0802 20.1493C15.0802 23.4107 17.7239 26.0544 20.9854 26.0544C24.2468 26.0544 26.8905 23.4107 26.8905 20.1493C26.8905 16.8879 24.2468 14.2442 20.9854 14.2442C17.7239 14.2442 15.0802 16.8879 15.0802 20.1493ZM25.7442 14.0101C25.7442 14.7718 26.362 15.3905 27.1246 15.3905C27.8863 15.3905 28.505 14.7718 28.505 14.0101C28.505 13.2484 27.8872 12.6306 27.1246 12.6306C26.362 12.6306 25.7442 13.2484 25.7442 14.0101ZM16.3389 29.51C15.2177 29.4589 14.6084 29.2722 14.2033 29.1143C13.6664 28.9053 13.2837 28.6563 12.8806 28.2541C12.4783 27.8519 12.2285 27.4692 12.0204 26.9323C11.8625 26.5273 11.6758 25.9179 11.6247 24.7967C11.5689 23.5844 11.5578 23.2203 11.5578 20.1493C11.5578 17.0783 11.5699 16.7151 11.6247 15.5019C11.6758 14.3807 11.8634 13.7723 12.0204 13.3663C12.2294 12.8294 12.4783 12.4467 12.8806 12.0436C13.2828 11.6413 13.6655 11.3915 14.2033 11.1834C14.6084 11.0255 15.2177 10.8388 16.3389 10.7877C17.5512 10.7319 17.9153 10.7208 20.9854 10.7208C24.0564 10.7208 24.4196 10.7329 25.6328 10.7877C26.754 10.8388 27.3624 11.0264 27.7683 11.1834C28.3052 11.3915 28.688 11.6413 29.0911 12.0436C29.4933 12.4458 29.7423 12.8294 29.9513 13.3663C30.1092 13.7714 30.2959 14.3807 30.347 15.5019C30.4027 16.7151 30.4139 17.0783 30.4139 20.1493C30.4139 23.2194 30.4027 23.5835 30.347 24.7967C30.2959 25.9179 30.1083 26.5273 29.9513 26.9323C29.7423 27.4692 29.4933 27.8519 29.0911 28.2541C28.6889 28.6563 28.3052 28.9053 27.7683 29.1143C27.3633 29.2722 26.754 29.4589 25.6328 29.51C24.4205 29.5657 24.0564 29.5769 20.9854 29.5769C17.9153 29.5769 17.5512 29.5657 16.3389 29.51ZM16.2442 8.71896C15.0199 8.77469 14.1838 8.96884 13.4528 9.25309C12.6966 9.54662 12.0557 9.94049 11.4157 10.5796C10.7765 11.2187 10.3827 11.8596 10.0891 12.6167C9.80489 13.3478 9.61075 14.1838 9.55502 15.4081C9.49835 16.6343 9.48535 17.0263 9.48535 20.1493C9.48535 23.2723 9.49835 23.6643 9.55502 24.8905C9.61075 26.1148 9.80489 26.9508 10.0891 27.6819C10.3827 28.438 10.7756 29.0799 11.4157 29.719C12.0548 30.3581 12.6957 30.751 13.4528 31.0455C14.1848 31.3298 15.0199 31.5239 16.2442 31.5796C17.4713 31.6354 17.8624 31.6493 20.9854 31.6493C24.1093 31.6493 24.5004 31.6363 25.7266 31.5796C26.9509 31.5239 27.7869 31.3298 28.518 31.0455C29.2741 30.751 29.9151 30.3581 30.5551 29.719C31.1942 29.0799 31.5871 28.438 31.8816 27.6819C32.1658 26.9508 32.3609 26.1148 32.4157 24.8905C32.4714 23.6634 32.4844 23.2723 32.4844 20.1493C32.4844 17.0263 32.4714 16.6343 32.4157 15.4081C32.36 14.1838 32.1658 13.3478 31.8816 12.6167C31.5871 11.8606 31.1942 11.2196 30.5551 10.5796C29.916 9.94049 29.2741 9.54662 28.5189 9.25309C27.7869 8.96884 26.9509 8.77377 25.7275 8.71896C24.5013 8.66322 24.1093 8.64929 20.9863 8.64929C17.8624 8.64929 17.4713 8.66229 16.2442 8.71896Z" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0_2012_97">
          <rect width="40" height="40" fill="white" transform="translate(0.984375 0.149292)"/>
          </clipPath>
          </defs></svg>
          <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2012_94)">
            <path d="M40.6562 20.1493C40.6562 9.1036 31.7019 0.149292 20.6562 0.149292C9.61055 0.149292 0.65625 9.1036 0.65625 20.1493C0.65625 31.195 9.61055 40.1493 20.6562 40.1493C31.7019 40.1493 40.6562 31.195 40.6562 20.1493Z" fill="white" fillOpacity="0.12"/>
            <path d="M26.1558 10.1493H23.1558C21.8297 10.1493 20.558 10.6761 19.6203 11.6138C18.6826 12.5515 18.1558 13.8232 18.1558 15.1493V18.1493H15.1558V22.1493H18.1558V30.1493H22.1558V22.1493H25.1558L26.1558 18.1493H22.1558V15.1493C22.1558 14.8841 22.2612 14.6297 22.4487 14.4422C22.6363 14.2547 22.8906 14.1493 23.1558 14.1493H26.1558V10.1493Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_2012_94">
            <rect width="40" height="40" fill="white" transform="translate(0.65625 0.149292)"/>
            </clipPath>
            </defs></svg>
            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_2012_89)">
              <path d="M40.3281 20.1493C40.3281 9.1036 31.3738 0.149292 20.3281 0.149292C9.28243 0.149292 0.328125 9.1036 0.328125 20.1493C0.328125 31.195 9.28243 40.1493 20.3281 40.1493C31.3738 40.1493 40.3281 31.195 40.3281 20.1493Z" fill="white" fillOpacity="0.12"/>
              <path d="M24.3286 16.6493C25.92 16.6493 27.4461 17.2814 28.5713 18.4067C29.6965 19.5319 30.3287 21.058 30.3287 22.6493V29.6494H26.3287V22.6493C26.3287 22.1189 26.1179 21.6102 25.7429 21.2351C25.3678 20.86 24.8591 20.6493 24.3286 20.6493C23.7982 20.6493 23.2895 20.86 22.9144 21.2351C22.5393 21.6102 22.3286 22.1189 22.3286 22.6493V29.6494H18.3286V22.6493C18.3286 21.058 18.9607 19.5319 20.086 18.4067C21.2112 17.2814 22.7373 16.6493 24.3286 16.6493Z" fill="white"/>
              <path d="M14.3281 17.6493H10.3281V29.6494H14.3281V17.6493Z" fill="white"/>
              <path d="M12.3281 14.6498C13.4327 14.6498 14.3281 13.7544 14.3281 12.6498C14.3281 11.5452 13.4327 10.6498 12.3281 10.6498C11.2235 10.6498 10.3281 11.5452 10.3281 12.6498C10.3281 13.7544 11.2235 14.6498 12.3281 14.6498Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_2012_89">
              <rect width="40" height="40" fill="white" transform="translate(0.328125 0.149292)"/>
              </clipPath>
              </defs>
              </svg>

         
        </div>
        
      </div>

      
      <div className="w-full border-t border-gray-800"></div>
    </footer>
     
    </div>
  );
}