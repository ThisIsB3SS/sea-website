import Image from 'next/image';
import { Button } from './ui/button';
import '../styles/custom.css';
export function Footer() {
  return (
    <footer className="flex px-16 justify-between items-center max-h-80 min-h-32 text-white bg-slate-600">
      <div className="copyright font-semibold">
        <p>© Copyright 2024</p>
        <p>All Rights Reserved</p>
        <p>Sea Webstudio</p>
      </div>
      <div className="CtaFooter">
        <div className="CtaFooter_wrapper w-auto text-4xl font-pinkerston font-bold rounded-lg transition-colors duration-200 ease-out bg-transparent hover:bg-blue-800">
          <h2>Contactez-nous</h2>
        </div>
        <div className="Socials flex items-center justify-center">
          <a href="/contact">
            <Image
              unoptimized={true}
              src="/assets/parrot-party.gif"
              alt="contact-us"
              width={30}
              height={30}
            />
          </a>
        </div>
        {/* <Image></Image> */}
      </div>
      <div className="infos font-semibold">
        <p>Sea Webstudio</p>
        <p>Paris, France </p>
      </div>
    </footer>
  );
}
