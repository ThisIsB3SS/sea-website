import { Header } from "@/components/Header";
import {Hero} from "@/components/Hero";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-16 bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 bg-blur-3xl">
    <Hero/>

    </main>
  );
}
