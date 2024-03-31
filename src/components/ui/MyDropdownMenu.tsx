'use client';
import { MenuBarIcon } from '../icons/MenuBarIcon';
import { useState } from 'react';
import '../../styles/custom.css';

function DropdownMenu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="dropdown-menu flex items-center justify-center ">
      <div
        className={`dropdown-menu-content border-white border-opacity-25 shadow-md bg-white bg-opacity-50 backdrop-blur-xl rounded-2xl w-full xs:mt-20 xs:left-16 sm:mt-24 p-10 top-40 sm:left-24 relative transition-transform duration-300 ease-in-out ${
          isDropdownOpen ? 'translate-x-0' : 'translate-x-96'
        }`}
      >
        <ul className="flex flex-col h-full w-full items-center justify-center gap-10 list-none xs:text-xl sm:text-2xl text-white drop-shadow-md text-justify text-nowrap  ">
          <li className="hover:scale-110 hover:underline decoration-emerald-400 underline-offset-4 transition-transform duration-100 ease-in-out">
            <a
              className="dropdown-menu-content-item font-semibold "
              href="#about"
            >
              A propos
            </a>
          </li>
          <li className="hover:scale-110 hover:underline decoration-emerald-400 underline-offset-4 transition-transform duration-100 ease-in-out">
            <a
              className="dropdown-menu-content-item font-semibold"
              href="#projects"
            >
              Projets
            </a>
          </li>
          <li className="hover:scale-110 hover:underline decoration-emerald-400 underline-offset-4 transition-transform duration-100 ease-in-out">
            <a
              className="dropdown-menu-content-item font-semibold"
              href="#services"
            >
              Services
            </a>
          </li>
          <li className="hover:scale-110 hover:underline decoration-emerald-400 underline-offset-4 transition-transform duration-100 ease-in-out">
            <a
              className="dropdown-menu-content-item font-semibold"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <button onClick={handleDropdown}>
        <MenuBarIcon
          className={`dropdown-menu-button xs:w-12 sm:w-20 h-auto text-blue-800 transition-transform duration-300 ease-in-out ${
            isDropdownOpen ? 'rotate-90 text-blue-400' : ''
          }`}
        />
      </button>
    </div>
  );
}
export default DropdownMenu;
