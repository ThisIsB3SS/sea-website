import SEA_Logo from '../../public/assets/Logo_entier_SEA_Webstudio.svg';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MenuBarIcon } from '@/components/icons/MenuBarIcon';
export function Header() {
  return (
    <header className="fixed flex items-start w-full max-h-20 p-4 top-0 left-0 z-50 bg-transparent ">
      <nav className="flex items-center justify-between px-4 max-h-20 w-full rounded-2xl border border-white border-opacity-25  bg-white bg-opacity-50 backdrop-blur-xl ">
        <a href="/" className="flex justify-start ">
          <Image
            src={SEA_Logo}
            alt="logo SEA Webstudio"
            className="w-96 transition-transform"
          />
        </a>
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MenuBarIcon className="w-20 h-auto text-blue-800" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Nos projets</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>A propos</DropdownMenuItem>
              <DropdownMenuItem>Création</DropdownMenuItem>
              <DropdownMenuItem>Développement</DropdownMenuItem>
              <DropdownMenuItem>Contact</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}
