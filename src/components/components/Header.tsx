'use client';
import SEA_Logo from '../../../public/assets/Logo_entier_SEA_Webstudio.svg';
import Image from 'next/image';

import { MenuBarIcon } from '@/components/icons/MenuBarIcon';
import DropdownMenu from '@/components/ui/DropdownMenu';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = (isOpen: boolean) => {
    setMenuOpen(isOpen);
  };
  return (
    <header className="header fixed flex items-start w-full h-f p-4 top-0 left-0 z-50 bg-transparent ">
      <nav className="flex items-center justify-between px-4 max-h-20 w-full rounded-2xl border border-white border-opacity-25  bg-white bg-opacity-50 backdrop-blur-xl ">
        <a href="/" className="flex justify-start">
          <Image
            src={SEA_Logo}
            alt="logo SEA Webstudio"
            className="max-h-40"
          />
        </a>
        <button onClick={() => toggleMenu(!isMenuOpen)}>
          <MenuBarIcon
            className={`dropdown-menu-button xs:w-12 sm:w-20 h-auto text-blue-800 transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'rotate-90 text-blue-400' : ''
            }`}
          />
        </button>
      </nav>
      <DropdownMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
    </header>
  );
}
