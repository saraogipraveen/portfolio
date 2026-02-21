import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { AboutPrinciples } from "@/components/AboutPrinciples";
import { Contact } from "@/components/Contact";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center p-4 sm:p-8 lg:p-12">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 auto-rows-[auto] gap-6 lg:gap-8">

        {/* Top Left: Hero spanning multiple columns and rows */}
        <div className="lg:col-span-8 lg:row-span-2 flex min-h-[400px]">
          <Hero />
        </div>

        {/* Top Right: Contact card */}
        <div className="lg:col-span-4 lg:row-span-1 flex min-h-[250px]">
          <Contact />
        </div>

        {/* Middle Right: Quick Facts/Principles */}
        <div className="lg:col-span-4 lg:row-span-2 flex">
          <AboutPrinciples />
        </div>

        {/* Tech Stack / Skills under Hero */}
        <div className="lg:col-span-8 lg:row-span-1 flex min-h-[200px]">
          <Skills />
        </div>

        {/* Featured Projects / Wins */}
        <div className="lg:col-span-12 lg:row-span-1 flex min-h-[400px]">
          <Projects />
        </div>

        {/* Bottom Full Width: Experience Timeline (Scrollable inside its card) */}
        <div className="lg:col-span-12 lg:row-span-1 flex min-h-[500px]">
          <Experience />
        </div>

      </div>
    </main>
  );
}
