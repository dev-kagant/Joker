import React from 'react';
import { NavLink } from 'react-router';

interface NavLinkItem {
  name: string;
  path: string;
}

interface NavProps {
  links: NavLinkItem[];
}

const NavComponent: React.FC<NavProps> = ({ links }) => {
  return (
    <nav className='flex flex-row w-1/3 h-20 lg:h-36 justify-evenly items-end text-joker-200 font-quantico text-2xl lg:text-4xl'>
      {links.map((link, index) => (
        <div key={index} className='pb-2'>
            <NavLink
                to={link.path}
                className="hover:border-b-2 hover:border-joker-200 hover:brightness-150 focus:font-bold cursor-pointer"
            >
              {link.name}
            </NavLink>
        </div>
      ))}
    </nav>
  )
}

export default NavComponent;