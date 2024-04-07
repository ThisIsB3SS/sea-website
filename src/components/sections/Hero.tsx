'use client';
import { CtaSection } from '../ui/CtaSection';
import { SurfGirl } from '../ui/SurfGirl';
import wave from '/public/assets/wave.svg';
import Image from 'next/image';
export function Hero() {
  return (
    <div
      id="hero_section"
      className="h-full w-full flex mt-40  flex-col items-center justify-center text-center text-white p-4"
    >
      <h1 className="font-montserrat font-bold leading-tight tracking-wide text-8xl sm:text-9xl drop-shadow-lg animate__animated animate__slideInUp">
        Surfez sur le{' '}
        <span className="shiny font-pinkerston text-blue-800 drop-shadow-xl  ">
          Digital
        </span>
      </h1>
      <CtaSection />
      <SurfGirl />
    
    </div>
  );
}
