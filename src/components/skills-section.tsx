'use client';

import { SKILLS } from '@/app/lib/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">My Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {SKILLS.map((skill) => (
                  <Card key={skill.name} className="flex flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl bg-card">
                    <skill.icon className="h-12 w-12 mb-4" style={{ color: skill.color }} />
                    <p className="font-semibold">{skill.name}</p>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
