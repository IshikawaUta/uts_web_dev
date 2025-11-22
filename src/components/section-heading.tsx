import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2 className={cn("font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl", className)}>
      {children}
    </h2>
  );
}
