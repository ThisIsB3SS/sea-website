import SEA_Logo from '../../../public/assets/Logo_entier_SEA_Webstudio.svg';
import Image from 'next/image';

import { MenuBarIcon } from '@/components/icons/MenuBarIcon';
import DropdownMenu from '@/components/ui/MyDropdownMenu';

export function Header() {
  return (
    <header className="fixed flex items-start w-full h-f p-4 top-0 left-0 z-50 bg-transparent ">
      <nav className="flex items-center justify-between px-4 max-h-20 w-full rounded-2xl border border-white border-opacity-25  bg-white bg-opacity-50 backdrop-blur-xl ">
        <a href="/" className="flex justify-start">
          <Image
            src={SEA_Logo}
            alt="logo SEA Webstudio"
            className="xs:scale-125 xs:ml-1 sm:ml-0 sm:scale-105 md:w-96 transition-transform "
          />
        </a>
        <div className="flex items-center space-x-4">
          <DropdownMenu/>
        </div>
      </nav>
    </header>
  );
}
