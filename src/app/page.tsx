import { CarouselBanner } from '@/components/sections/CarouselBanner';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { ModeToggle } from '@/components/mode-toggle';
import { About } from '@/components/sections/About';
import { Testimonials } from '@/components/sections/Testimonials';
import { CtaSection } from '@/components/ui/CtaSection';
import Image from 'next/image';
import  surf  from '../../public/assets/surf.png';

export default function Home() {
  const bg1 = '/assets/Eléments_Graphiques/Eléments_Graphiques/107_2.svg';
  return (
    <main className="w-full min-h-screen flex flex-col  items-center justify-center p-0 gap-0 bg-gradient-to-tr from-blue-700 via-blue-300 to-emerald-500">
      <div className="min-h-screen">
        <Hero />
        <CtaSection />
        <Image src={surf} alt={"surfing"} className='h-full w-full' />
      </div>

      <div id="about"></div>
      <div
        className="about-carousel-banner-wrapper w-full min-h-screen m-0 flex flex-col justify-around "
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <About />
        <CarouselBanner />
      </div>
      <div id="projects"></div>
      <div className="projects-testimonials-wrapper w-full min-h-screen m-0 flex flex-col justify-around ">
        <Projects />
        <Testimonials />
        <div className="spacer min-h-40 w-full"></div>
      </div>
    </main>
  );
}
