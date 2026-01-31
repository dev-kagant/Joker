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
    <div className="flex flex-row justify-between h-24 items-center px-8 border-b-2 border-teal-800 bg-green-300">
      <div className="absolute top-0 left-0 h-1/4 w-1/4 z-100">
        <img src={jokerLogo} alt="joker logo" className="h-80"/>
      </div>
      <h3 className="text-7xl font-quantico cursor-pointer font-bold text-purple-400" onClick={() => {navigate('/joker')}} >oker</h3>
      {(width > 820) ? <NavComponent links={links}/> :
      <MobileNavComponent links={links} />}
    </div>
  );
}

export default HeaderComponent