import { ReactEventHandler } from 'react';
import '../../styles/custom.css';
import Link from 'next/link';

function DropdownMenu({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: (isOpen: boolean) => void;
}) {
  // Close the dropdown menu
  const closeDropdown: ReactEventHandler = (event) => {
    const dropdown = document.querySelector('.dropdown-menu-content');
    dropdown?.classList.remove('translate-x-0');
    dropdown?.classList.remove('opacity-100');
    dropdown?.classList.remove('w-screen');
    dropdown?.classList.remove('h-screen');
    dropdown?.classList.add('opacity-0');
    dropdown?.classList.add('w-0');
    dropdown?.classList.add('h-0');

    const dropdownButton = document.querySelector('.dropdown-menu-button');
    dropdownButton?.classList.remove('text-blue-400');
    dropdownButton?.classList.remove('rotate-90');
    // Appelle la fonction onToggle pour fermer le menu et remonter l'état au composant parent, le Header
    onToggle(false);
  };

  return (
    <div
      className={`dropdown-menu-content  absolute top-0 right-0   flex justify-center border-white border-opacity-25 shadow-md bg-white bg-opacity-50  backdrop-blur-xl rounded-2xl transition-all duration-300  ${
        isOpen
          ? 'translate-x-0 opacity-100 w-screen h-screen'
          : 'opacity-0 w-0 h-0'
      }`}
      aria-expanded={isOpen ? true : false}
      aria-hidden={isOpen ? true : false}
      aria-roledescription="menu navigation"
      style={{ zIndex: -100 }}
    >
      <ul className="flex flex-col  items-center justify-evenly list-none xs:text-3xl sm:text-4xl text-white drop-shadow-md text-justify text-nowrap p-8  ">
        <li className={isOpen ? 'animate__animated animate__fadeInUp' : ''}>
          <a
            className={
              isOpen ? 'dropdown-menu-content-item font-semibold ' : ''
            }
            href="/#about"
            onClick={closeDropdown}
          >
            <span
              className={
                isOpen
                  ? 'hover:text-blue-800  transition-colors duration-200 ease-in-out'
                  : ''
              }
            >
              A propos
            </span>
          </a>
        </li>
        <li className={isOpen ? 'animate__animated animate__fadeInUp' : ''}>
          <a
            className={
              isOpen ? 'dropdown-menu-content-item font-semibold ' : ''
            }
            href="/#services"
            onClick={closeDropdown}
          >
            <span
              className={
                isOpen
                  ? 'hover:text-blue-800  transition-colors duration-200 ease-in-out'
                  : ''
              }
            >
              Services
            </span>
          </a>
        </li>
        <li className={isOpen ? 'animate__animated animate__fadeInUp' : ''}>
          <a
            className={
              isOpen ? 'dropdown-menu-content-item font-semibold ' : ''
            }
            href="/#projects"
            onClick={closeDropdown}
          >
            <span
              className={
                isOpen
                  ? 'hover:text-blue-800  transition-colors duration-200 ease-in-out'
                  : ''
              }
            >
              Projets
            </span>
          </a>
        </li>
        <li className={isOpen ? 'animate__animated animate__fadeInUp' : ''}>
          <Link
            className={
              isOpen ? 'dropdown-menu-content-item font-semibold ' : ''
            }
            href="/contact"
            onClick={closeDropdown}
          >
            <span
              className={
                isOpen
                  ? 'hover:text-blue-800  transition-colors duration-200 ease-in-out'
                  : ''
              }
            >
              Contact
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default DropdownMenu;
