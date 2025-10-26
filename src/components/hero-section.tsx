"use client";

import { Button } from './ui/button';
import { SOCIAL_LINKS } from '@/app/lib/portfolio-data';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="container mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 md:px-6 animate-fade-in-up">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          <span className="block mb-2 text-muted-foreground">Hi, I am a</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">Full-Stack Developer</span>
        </h1>
        <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
          I build beautiful, responsive, and performant web applications. Passionate about creating amazing user experiences and solving complex problems.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#contact">Hire Me</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/resume.pdf" download>Download CV <ArrowDown className="ml-2 h-4 w-4" /></a>
          </Button>
        </div>
        <div className="flex justify-center gap-4 pt-4">
          {SOCIAL_LINKS.map((link) => (
            <Button key={link.name} asChild variant="ghost" size="icon">
              <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <link.icon className="h-6 w-6" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper function to animate gradient
const keyframes = `
@keyframes gradient-x {
  0%, 100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}
`;

const style = typeof document !== 'undefined' ? document.createElement('style') : null;
if (style) {
  style.innerHTML = keyframes;
  document.head.appendChild(style);
}
