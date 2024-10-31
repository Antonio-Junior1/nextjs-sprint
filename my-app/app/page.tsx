import { HeaderHome } from "./_components/header-home";
import { MainHome } from "./_components/main-home";
import { SvgFooter } from "./_components/svg-footer";
import Script from "next/script";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      
      <HeaderHome/>
      <MainHome/>
      <SvgFooter/>
      <Script id="watson-chat" strategy="afterInteractive">
        {`
          window.watsonAssistantChatOptions = {
            integrationID: "8afe2391-1b53-4800-857d-bc7a8820028f",
            region: "us-south",
            serviceInstanceID: "875f6872-0c58-4f4a-940d-ffabdca41c90",
            onLoad: async (instance) => { await instance.render(); }
          };
          setTimeout(function(){
            const t=document.createElement('script');
            t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
            document.head.appendChild(t);
          });
        `}
      </Script>
      
    </div>
  );
}
