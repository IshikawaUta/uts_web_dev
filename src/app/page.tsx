import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
import { Resume } from '@/components/sections/resume';
import { AiBioGenerator } from '@/components/sections/ai-bio-generator';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Resume />
        <AiBioGenerator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
