
'use client';

import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import SkillsSection from '@/components/skills-section';
import ProjectsSection from '@/components/projects-section';
import ContactSection from '@/components/contact-section';
import PublicationSection from '@/components/publication-section';
import Reveal from '@/components/reveal';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Reveal>
        <AboutSection />
      </Reveal>
      <Reveal>
        <SkillsSection />
      </Reveal>
      <ProjectsSection />
      <Reveal>
        <PublicationSection />
      </Reveal>
      <Reveal>
        <ContactSection />
      </Reveal>
    </>
  );
}
