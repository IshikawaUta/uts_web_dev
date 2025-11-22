import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PROJECTS } from '@/lib/data';
import imageData from '@/lib/placeholder-images.json';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projectImages = imageData.placeholderImages;

  return (
    <section id="projects" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <SectionHeading>Proyek Saya</SectionHeading>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Berikut adalah beberapa proyek yang saya banggakan. Masing-masing merupakan tantangan unik dan kesempatan belajar.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {PROJECTS.map((project) => {
            const image = projectImages.find(img => img.id === project.imageId);
            return (
              <Card key={project.title} className="overflow-hidden transition-shadow hover:shadow-xl">
                {image && (
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={image.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button asChild>
                    <Link href={project.liveUrl} target="_blank">
                      <ExternalLink className="mr-2" /> Demo Langsung
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={project.repoUrl} target="_blank">
                      <Github className="mr-2" /> GitHub
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
