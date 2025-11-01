
'use client';

import { PROJECTS } from '@/app/lib/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from './ui/card';
import Image from 'next/image';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Reveal from './reveal';
import { motion } from 'framer-motion';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => {
              const projectImage = PlaceHolderImages.find(p => p.id === project.image);
              return (
                <Reveal key={project.title} delay={index * 0.1}>
                  <motion.div whileHover={{ scale: 1.05 }} className="h-full">
                    <Card className="group flex flex-col overflow-hidden bg-background text-foreground h-full">
                      {projectImage && (
                        <div className="relative w-full aspect-[4/3]">
                          <Image
                            src={projectImage.imageUrl}
                            alt={project.title}
                            fill
                            className="object-cover"
                            data-ai-hint={projectImage.imageHint}
                          />
                        </div>
                      )}
                      <CardHeader className="p-4">
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 flex-grow">
                        <CardDescription className="text-sm">{project.description}</CardDescription>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="secondary">{tech}</Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 flex justify-between items-center">
                        <Button asChild variant="link" className="p-0 h-auto text-sm">
                          <Link href={`/projects/${project.slug}`}>
                            View Details <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                        {project.link && project.link !== '#' && (
                          <Button asChild variant="outline" size="sm">
                            <Link href={project.link} target="_blank" rel="noopener noreferrer">
                              Live Demo <ExternalLink className="ml-1 h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  </motion.div>
                </Reveal>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
