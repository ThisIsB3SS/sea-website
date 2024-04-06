import Image from 'next/image';
import '../../styles/custom.css';
import Markdown from 'react-markdown';

export function Footer() {
  return (
    <footer className="flex flex-col md:flex-row px-16 pb-4 justify-between items-center max-h-80 min-h-32 text-white bg-gradient-to-t from-black to-custom-blue">
      {/* 1ère colonne */}
      <div className="copyright font-thin order-2 flex flex-row sm:flex-col mt-4 md:mt-0 ">
        <span className="">
          © Copyright 2024 <br /> All Rights Reserved <br /> Sea Webstudio
        </span>
      </div>

      {/* 2ème colonne */}
      <div className="CtaFooter  flex flex-col justify-center items-center gap-4 p-2 order-1 md:order-2">
        <div className="CtaFooter_wrapper w-auto text-3xl sm:text-4xl font-montserrat rounded-lg transition-colors duration-200 ease-out bg-transparent hover:bg-blue-800">
          <a href="/contact">
            <h2>Contactez-nous</h2>
          </a>
        </div>
        <div className="Socials flex items-center justify-between gap-2">
          {/* mail */}
          <a href="mailto:contact@seawebstudio.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18.175 17H15q-.425 0-.712-.288T14 16q0-.425.288-.712T15 15h3.175l-.9-.9Q17 13.825 17 13.413t.3-.713q.275-.275.7-.275t.7.275l2.6 2.6q.125.125.2.312t.075.388q0 .2-.075.387t-.2.313l-2.6 2.6q-.275.275-.687.288T17.3 19.3q-.275-.275-.275-.7t.275-.7zM10.4 11L17 7.15V5h-.25L10.4 8.675L4.225 5H4v2.2zm-6.525 6q-.775 0-1.325-.55T2 15.125V4.875q0-.775.55-1.325T3.875 3h13.25q.775 0 1.325.55T19 4.875V9.2q0 .35-.275.6t-.625.225q-1.225-.05-2.337.4t-1.988 1.325q-.875.875-1.338 2t-.412 2.35q.025.35-.225.625t-.6.275z"
              ></path>
            </svg>
          </a>
          {/* linkedin */}
          <a
            href="https://www.linkedin.com/in/sebastien-escudero/"
            target="_blank"
          >
            <Image
              src={'/assets/linkedIn.svg'}
              alt="Follow us on LinkedIn"
              width={40}
              height={40}
            />
          </a>
          {/* Gif Parrot */}
          <a href="/contact">
            <Image
              unoptimized={true}
              src="/assets/parrot-party.gif"
              alt="contact-us"
              width={40}
              height={40}
            />
          </a>
          {/* Github */}
          <a href="https://github.com/beseb" target="_blank">
            <Image
              src="/assets/logos_carousel/github.svg"
              alt="follow us on Github"
              height={40}
              width={40}
            ></Image>
          </a>
          {/* Codeur */}
          <a href="https://www.codeur.com/-sebastien_sq" target="_blank">
            <Image
              src="/assets/CodeurLogo.svg"
              alt="Follow us on Codeur.com"
              height={40}
              width={40}
            />
          </a>
        </div>
        {/* Badge Codeur */}
        <div>
          <Markdown className="h-auto w-40">
            [![sebastien_sq —
            Codeur.com](https://api.codeur.com/widgets/badge.svg?k=N-bF32UFYPm7pCBg)](https://www.codeur.com/-sebastien_sq)
          </Markdown>
        </div>
      </div>
      {/* 3e colonne */}
      <div className="infos font-thin hidden md:flex md:flex-col order-3">
        <p>Sea Webstudio</p>
        <p>Paris, France </p>
      </div>
    </footer>
  );
}
