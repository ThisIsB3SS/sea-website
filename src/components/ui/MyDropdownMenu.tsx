'use client';
import { MenuBarIcon } from '../icons/MenuBarIcon';
import { useState } from 'react';

function DropdownMenu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="dropdown-menu flex items-center justify-center overflow-visible">
      <div
        className={`dropdown-menu-content rounded-lg bg-white bg-opacity-70 backdrop-blur-9xl  w-full mt-24 p-10 top-40 left-24 relative  transition-transform duration-300 ease-in-out ${
          isDropdownOpen ? 'translate-x-0' : 'translate-x-96'
        }`}
      >
        <ul className="flex flex-col h-full w-full items-center justify-center gap-10 list-none text-2xl ">
          <li className='hover:scale-110 hover:underline decoration-emerald-400 underline-offset-4 transition-transform duration-100 ease-in-out'>
            <a className="dropdown-menu-content-item font-semibold " href="/about">
              A propos
            </a>
          </li>
          <li className='hover:scale-110 hover:underline decoration-emerald-400 underline-offset-4 transition-transform duration-100 ease-in-out'>
            <a className="dropdown-menu-content-item font-semibold" href="/creation">
              Création
            </a>
          </li>
          <li className='hover:scale-110 hover:underline decoration-emerald-400 underline-offset-4 transition-transform duration-100 ease-in-out'>
            <a className="dropdown-menu-content-item font-semibold"  href="/developpement">
              Développement
            </a>
          </li>
          <li className='hover:scale-110 hover:underline decoration-emerald-400 underline-offset-4 transition-transform duration-100 ease-in-out'>
            <a className="dropdown-menu-content-item font-semibold" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <button onClick={handleDropdown}>
        <MenuBarIcon
          className={`dropdown-menu-button w-20 h-auto text-blue-800 transition-transform duration-300 ease-in-out ${
            isDropdownOpen ? 'rotate-90 text-blue-400' : ''
          }`}
        />
      </button>
    </div>
  );
}
export default DropdownMenu;
