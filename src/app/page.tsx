import { CarouselBanner } from '@/components/CarouselBanner';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { ModeToggle } from '@/components/mode-toggle';
import { url } from 'inspector';
import Image from 'next/image';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
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
      {/* <iframe
        src="https://lottie.host/embed/5ecbd2b4-eaaa-4793-b186-c20a9f0c5daa/uA9TIWUWr4.json"
        height={800}
        width={800}
        style={{zIndex:0}}
      ></iframe> */}

      <CarouselBanner />
      <About />
      <Projects />
      <Testimonials />
    </main>
  );
}

// bg-gradient-to-tl from-blue-50 via-blue-200 to-blue-50
