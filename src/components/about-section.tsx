'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutSection() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-photo');

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            {aboutImage && (
               <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-lg transition-transform duration-300 hover:scale-105">
                <Image
                  src={aboutImage.imageUrl}
                  alt="About me photo"
                  fill
                  className="object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              </div>
            )}
          </div>
          <div className="md:col-span-2 text-center md:text-left space-y-4">
            <p className="text-lg text-muted-foreground">
            I'm a Master's in Computer Science graduate specializing in Data Science and Machine Learning. I'm passionate about building intelligent applications that solve real-world problems.
            I focus on developing user-friendly web applications with attention to detail, scalability, and performance.         
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}
