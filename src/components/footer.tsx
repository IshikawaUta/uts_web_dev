import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="w-full border-t bg-card">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Eka Saputra. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {SOCIAL_LINKS.map((link, index) => {
            const Icon = link.icon as LucideIcon;
            return (
              <Button key={index} variant="ghost" size="icon" asChild>
                <Link href={link.href} target="_blank">
                  <Icon className="h-4 w-4" />
                </Link>
              </Button>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
