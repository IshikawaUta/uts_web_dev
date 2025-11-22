import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { SKILLS } from "@/lib/data";
import { LucideIcon } from "lucide-react";

const FigmaIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.429 2.25H8.571a3.857 3.857 0 000 7.714h3.086A3.857 3.857 0 0115.429 2.25z" fill="#0ACF83"></path>
    <path d="M8.571 6.107a3.857 3.857 0 00-3.857 3.858v3.085a3.857 3.857 0 007.714 0v-3.085a3.857 3.857 0 00-3.857-3.858z" fill="#A259FF"></path>
    <path d="M4.714 13.893a3.857 3.857 0 003.857 3.857H12a3.857 3.857 0 000-7.714H8.571a3.857 3.857 0 00-3.857 3.857z" fill="#F24E1E"></path>
    <path d="M12.429 17.75a3.857 3.857 0 003.857-3.857V12a3.857 3.857 0 10-7.714 0v1.902a3.857 3.857 0 003.857 3.848z" fill="#FF7262"></path>
    <path d="M16.286 9.964a3.857 3.857 0 003.857-3.857A3.857 3.857 0 0016.286 2.25a3.857 3.857 0 000 7.714z" fill="#1ABCFE"></path>
  </svg>
);


export function About() {
  return (
    <section id="about" className="w-full bg-card py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-1">
            <SectionHeading>About Me</SectionHeading>
            <p className="text-muted-foreground">
              I am a passionate and results-oriented developer with a knack for creating intuitive and aesthetically pleasing digital products. With a strong foundation in both design principles and modern web technologies, I thrive in collaborative environments where I can bridge the gap between creative vision and technical execution.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or hiking in the great outdoors.
            </p>
          </div>
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-2xl font-bold font-headline">My Skills</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {SKILLS.map((skill) => {
                const Icon = skill.icon === 'figma' ? FigmaIcon : skill.icon as LucideIcon;
                return (
                  <Card key={skill.name} className="flex items-center gap-4 p-4 transition-all hover:bg-accent/10 hover:shadow-md">
                    <div className="rounded-lg bg-accent/20 p-2 text-accent">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-semibold">{skill.name}</span>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
