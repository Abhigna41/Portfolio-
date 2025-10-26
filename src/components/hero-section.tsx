"use client";

import { useEffect } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  useEffect(() => {
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

    const style = document.createElement('style');
    style.innerHTML = keyframes;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section id="home" className="container mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 md:px-6 animate-fade-in-up">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          <span className="block mb-2 text-muted-foreground">Hi, I'm  </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">Naga Abhigna Gunda </span>
        </h1>
        <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
        Master’s in Computer Science graduate specializing in Data Science and Machine Learning. Passionate about building intelligent applications that solve real-world problems.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#about">About me</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/resume.pdf" download>Download CV <ArrowDown className="ml-2 h-4 w-4" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
}
