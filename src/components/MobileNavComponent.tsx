import {useState} from 'react';
import { NavLink } from 'react-router';
import { Bars3Icon } from '@heroicons/react/16/solid';

interface NavLinkItem {
  name: string;
  path: string;
}

interface MobileNavProps {
  links: NavLinkItem[];
}

const MobileNavComponent: React.FC<MobileNavProps> = ({ links }) => {
  const [activeMenu, setActiveMenu] = useState(false);

  const handleActiveMenu = () => {
    setActiveMenu(!activeMenu)
  }

  return (
    <div className='flex flex-col w-1/3 h-auto pr-0 '>
      <button className='h-15 sm:h-20 absolute right-0 top-0 mr-8'><Bars3Icon className='text-joker-200 size-8 sm:size-10' onClick={handleActiveMenu}/></button>
      {activeMenu ? (
      <nav className='flex flex-col absolute right-0 top-15 sm:top-20 w-1/2 h-auto opacity-95 text-joker-200 font-quantico text-2xl z-10'>
        {links.map((link, index) => (
          <div key={index} className='flex flex-row justify-end w-full p-4 sm:my-2'>
            <NavLink
                to={link.path}
                className=" cursor-pointer text-2xl sm:text-4xl"
                onClick={handleActiveMenu}
            >
              {link.name}
            </NavLink>
          </div>
        ))}
      </nav>
        ) : (
        null
      )}
    </div>
  )
}

export default MobileNavComponent