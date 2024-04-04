import { color } from 'framer-motion';
import { CarouselBanner } from './CarouselBanner';
import { CtaSection } from '../ui/CtaSection';
import { SurfGirl } from '../ui/SurfGirl';

export function Hero() {
  return (
    <div id="hero_section" className="mt-40 h-screen">
      <div className="w-full relative flex flex-col items-center justify-center text-center text-white p-4 ">
        <h1 className="font-montserrat font-bold leading-tight tracking-wide text-8xl sm:text-9xl drop-shadow-lg animate__animated animate__slideInUp">
          Surfez sur le{' '}
          <span className="font-pinkerston text-blue-800 drop-shadow-xl  ">
            Digital
          </span>
        </h1>
        <CtaSection />
        <SurfGirl />
      </div>
    </div>
  );
}
