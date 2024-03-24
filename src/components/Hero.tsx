import { CarouselBanner } from './CarouselBanner';
import { CtaSection } from './ui/CtaSection';

export function Hero() {
  return (
    <div id="hero_section" className="mt-40">
      <div className="w-full relative flex flex-col items-center justify-center  text-center text-white ">
        <h1 className="font-montserrat font-bold leading-tight tracking-wide text-8xl sm:text-9xl drop-shadow-lg animate__animated animate__slideInUp">
          Surfez sur le{' '}
          <span className="font-pinkerston text-blue-800 drop-shadow-xl  ">
            Digital
          </span>
        </h1>
      </div>
      <CtaSection />
    </div>
  );
}
