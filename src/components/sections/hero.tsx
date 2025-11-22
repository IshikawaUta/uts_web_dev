import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import data from '@/lib/placeholder-images.json';

export function Hero() {
  const profileImage = data.placeholderImages.find(img => img.id === 'profile-picture');

  return (
    <section id="hero" className="relative w-full py-20 md:py-32 lg:py-40">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              eka saputra
            </h1>
            <h2 className="text-2xl font-medium text-primary md:text-3xl">
              Creative Developer & UI/UX Designer
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              I build beautiful, responsive, and user-friendly web experiences. Turning complex problems into elegant digital solutions.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">
                  Get in Touch
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            {profileImage && (
              <div className="relative h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96">
                <Image
                  src={profileImage.imageUrl}
                  alt={profileImage.description}
                  width={400}
                  height={400}
                  className="rounded-full object-cover shadow-2xl"
                  data-ai-hint={profileImage.imageHint}
                />
                <div className="absolute inset-0 rounded-full border-4 border-primary/50" />
                <div className="absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-accent/20" />
                <div className="absolute -top-2 -left-2 h-20 w-20 rounded-lg bg-primary/20" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
