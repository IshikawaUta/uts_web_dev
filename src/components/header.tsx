'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/data';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold font-headline">LuminaFolio</span>
          </Link>
          <nav className="hidden gap-6 text-sm md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/60 transition-colors hover:text-foreground/80"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="hidden items-center gap-2 md:flex">
            {SOCIAL_LINKS.slice(0, 2).map((link, index) => {
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

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="/" className="mb-8 flex items-center">
                <span className="font-bold font-headline">LuminaFolio</span>
              </Link>
              <nav className="flex flex-col gap-6 text-lg font-medium">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-foreground/60 transition-colors hover:text-foreground/80"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
