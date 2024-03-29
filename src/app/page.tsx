import { CarouselBanner } from '@/components/sections/CarouselBanner';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/sections/Projects';
import { ModeToggle } from '@/components/mode-toggle';
import { url } from 'inspector';
import Image from 'next/image';
import { About } from '@/components/sections/About';
import { Testimonials } from '@/components/sections/Testimonials';
import { CtaSection } from '@/components/ui/CtaSection';

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
      <CtaSection />

      <CarouselBanner />
      <About />
      <Projects />
      <Testimonials />
    </main>
  );
}

// bg-gradient-to-tl from-blue-50 via-blue-200 to-blue-50
