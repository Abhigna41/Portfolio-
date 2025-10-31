
'use client';

import { SKILLS } from '@/app/lib/portfolio-data';
import { Card } from './ui/card';
import Icon from './icon-map';
import Reveal from './reveal';
import { motion } from 'framer-motion';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {SKILLS.map((skill, index) => (
              <Reveal key={skill.name} delay={index * 0.05}>
                <motion.div whileHover={{ scale: 1.05 }} className="h-full">
                  <Card className="group flex flex-col items-center justify-center p-6 text-center transition-shadow duration-300 hover:shadow-xl bg-card h-full">
                    <Icon name={skill.icon} className="h-12 w-12 mb-4 transition-transform duration-300 group-hover:animate-jiggle" style={{ color: skill.color }} />
                    <p className="font-semibold">{skill.name}</p>
                  </Card>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
