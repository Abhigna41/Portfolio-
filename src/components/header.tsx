"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Code2, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-sm border-b' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Code2 className="h-6 w-6 text-primary" />
          <span>ProFolio</span>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col items-start gap-6 p-6">
                  <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4" onClick={closeMobileMenu}>
                    <Code2 className="h-6 w-6 text-primary" />
                    <span>ProFolio</span>
                  </Link>
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-lg font-medium hover:text-primary transition-colors" onClick={closeMobileMenu}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
