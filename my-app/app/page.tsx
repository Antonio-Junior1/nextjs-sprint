import { HeaderHome } from "./_components/header-home";
import { MainHome } from "./_components/main-home";
import { SvgFooter } from "./_components/svg-footer";


export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <HeaderHome/>
      <MainHome/>
      <SvgFooter/>
    </div>
  );
}
  