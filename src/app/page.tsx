import { CarouselBanner } from '@/components/sections/CarouselBanner';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/sections/Projects';
import { ModeToggle } from '@/components/mode-toggle';
import { About } from '@/components/sections/About';
import { Testimonials } from '@/components/sections/Testimonials';
import { CtaSection } from '@/components/ui/CtaSection';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  const bg1 = '/assets/Eléments_Graphiques/Eléments_Graphiques/107_2.svg';
  return (
    <main className="w-full min-h-screen flex flex-col  items-center justify-center p-0 gap-0 bg-gradient-to-tr from-blue-700 via-blue-300 to-emerald-500">
      <Hero />
      <CtaSection />

      <div id="about"></div>
      <div
        className="about-testimonials-wrapper w-full m-0 "
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <About />
        <Testimonials />
      </div>
      <div id="projects"></div>
      <Projects />
      <CarouselBanner />
      <div id="contact"></div>
      <Contact />
    </main>
  );
}
