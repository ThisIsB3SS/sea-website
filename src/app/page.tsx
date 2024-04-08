import { CarouselBanner } from '@/components/sections/CarouselBanner';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { About } from '@/components/sections/About';
import { Testimonials } from '@/components/sections/Testimonials';
import { Services } from '@/components/sections/Services';

export default function Home() {
  const bg1 = '/assets/Eléments_Graphiques/Eléments_Graphiques/107_2.svg';

  return (
    <main className="w-full min-h-screen flex flex-col  items-center justify-center p-0 gap-0 bg-custom-gradient ">
      <Hero />
      <div
        className="about-carousel-banner-wrapper w-full min-h-screen m-0 flex flex-col justify-around "
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div id="about"></div>
        <About />
        <div id="services"></div>
        <Services />
        <CarouselBanner />
      </div>
      <div id="projects"></div>
      <div className="projects-testimonials-wrapper z-0 w-full min-h-screen m-0 mb-6 flex flex-col justify-around ">
        <Projects />
        <Testimonials />
      </div>
    </main>
  );
}
