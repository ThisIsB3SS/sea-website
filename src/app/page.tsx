import { CarouselBanner } from '@/components/sections/CarouselBanner';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { ModeToggle } from '@/components/mode-toggle';
import { About } from '@/components/sections/About';
import { Testimonials } from '@/components/sections/Testimonials';
import { Services } from '@/components/sections/Services';

export default function Home() {
  const bg1 = '/assets/Eléments_Graphiques/Eléments_Graphiques/107_2.svg';
  const bg2 = '/assets/Eléments_Graphiques/Eléments_Graphiques/107.svg';
  return (
    <main className="w-full min-h-screen flex flex-col  items-center justify-center p-0 gap-0 bg-gradient-to-tr from-blue-700 via-blue-300 to-emerald-500">

      <div id="about"></div>
      <div
        className="about-carousel-banner-wrapper w-full min-h-screen m-0 flex flex-col justify-around "
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Hero />
        <About />
        <div id="services"></div>
        <Services />
        <CarouselBanner />
      </div>
      <div id="projects"></div>
      <Projects />
      <div
        className="projects-testimonials-wrapper z-0 w-full min-h-screen m-0 flex flex-col justify-around "
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Testimonials />
        <div className="spacer min-h-40 w-full"></div>
      </div>
    </main>
  );
}
