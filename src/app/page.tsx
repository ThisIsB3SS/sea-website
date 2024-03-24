import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ModeToggle } from '@/components/mode-toggle';
import { url } from 'inspector';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-tl from-blue-50 via-blue-200 to-blue-50">
      <div className="hero_background bg-no-repeat bg-cover fixed top-0 left-0 h-full w-screen" style={{backgroundImage: "url('/assets/Eléments_Graphiques/Eléments_Graphiques/Plan de travail 108.svg')"}} ></div>
      <div className="hero_section_wrapper mt-24 w-full overflow-visible">
        <Hero />
      </div>
    </main>
  );
}
