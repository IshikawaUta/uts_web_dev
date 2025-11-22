import { SectionHeading } from "@/components/section-heading";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, Dot } from "lucide-react";
import { EXPERIENCE, EDUCATION } from "@/lib/data";

export function Resume() {
  return (
    <section id="resume" className="w-full bg-card py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <SectionHeading>Resume Saya</SectionHeading>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Cuplikan perjalanan profesional dan latar belakang pendidikan saya.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Work Experience */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Briefcase className="h-8 w-8 text-primary" />
              <h3 className="font-headline text-3xl font-bold">Pengalaman</h3>
            </div>
            <div className="relative space-y-8 pl-8 before:absolute before:inset-y-0 before:left-3 before:w-0.5 before:bg-border">
              {EXPERIENCE.map((job, index) => (
                <Card key={index} className="relative">
                  <div className="absolute -left-[38px] top-5 h-2 w-2 rounded-full bg-primary" />
                  <CardHeader>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <CardTitle className="text-xl">{job.role}</CardTitle>
                      <div className="text-sm text-muted-foreground">{job.duration}</div>
                    </div>
                    <div className="font-semibold text-primary">{job.company}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      {job.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <Dot className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <h3 className="font-headline text-3xl font-bold">Pendidikan</h3>
            </div>
            <div className="relative space-y-8 pl-8 before:absolute before:inset-y-0 before:left-3 before:w-0.5 before:bg-border">
              {EDUCATION.map((edu, index) => (
                <Card key={index} className="relative">
                  <div className="absolute -left-[38px] top-5 h-2 w-2 rounded-full bg-primary" />
                  <CardHeader>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <div className="text-sm text-muted-foreground">{edu.duration}</div>
                    </div>
                    <div className="font-semibold text-primary">{edu.institution}</div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
