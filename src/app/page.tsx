import { CarouselBanner } from '@/components/CarouselBanner';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { ModeToggle } from '@/components/mode-toggle';
import { url } from 'inspector';
import Image from 'next/image';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';

export default function Home() {
  return (
    <main
      className="w-full min-h-screen flex flex-col  items-center justify-center bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/assets/Eléments_Graphiques/Eléments_Graphiques/Plan de travail 108.svg')",
      }}
    >
      <Hero />
      <CarouselBanner />
      <About />
      <Projects />
      <Testimonials />
    </main>
  );
}

// bg-gradient-to-tl from-blue-50 via-blue-200 to-blue-50
