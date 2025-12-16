import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
import { Resume } from '@/components/sections/resume';
import { Contact } from '@/components/sections/contact';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default async function Home() {

  // ⏳ Tambahkan penundaan (delay) di sini. 
  // Selama 3 detik ini, app/loading.tsx Anda akan terlihat.
  // Ganti ini dengan operasi data fetching nyata di masa depan.
  await sleep(3000); 

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* ... komponen Anda */}
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
