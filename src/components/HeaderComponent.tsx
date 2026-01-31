import { useNavigate } from "react-router";
import useScreenSize from '../hooks/useScreenSize'
import NavComponent from "./NavComponent.tsx";
import MobileNavComponent from "./MobileNavComponent.tsx";
import jokerLogo from '../../public/JokerLogo.svg';

interface NavLinkItem {
  name: string;
  path: string;
}

interface HeaderProps {
  links: NavLinkItem[];
}

function HeaderComponent({ links }: HeaderProps){
  const navigate = useNavigate();
  const {width} = useScreenSize();

  return (
    <div className="flex flex-row justify-between h-15 sm:h-20 lg:h-36 items-center px-8 bg-black">
      <div className="absolute top-1 lg:top-2 -left-2 sm:h-40 sm:-left-1 lg:left-0 h-30 lg:h-64 z-100 cursor-pointer" onClick={() => {navigate('/joker')}}>
        <img src={jokerLogo} alt="joker logo" className="h-full w-full"/>
      </div>
      <h3 className="text-4xl ml-12 sm:ml-20 sm:text-6xl lg:text-8xl lg:ml-38 font-quantico cursor-pointer font-bold text-joker-100" onClick={() => {navigate('/joker')}} >OKER</h3>
      {(width > 820) ? <NavComponent links={links}/> :
      <MobileNavComponent links={links} />}
    </div>
  );
}

export default HeaderComponent