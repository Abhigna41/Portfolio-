
import { PROJECTS } from '@/app/lib/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, GanttChartSquare, Target, Goal, Zap, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params: { slug } }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === slug);
  const projectImage = PlaceHolderImages.find(p => p.id === project?.image);

  if (!project) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 text-center">
        <h2 className="text-2xl font-bold text-destructive">Project not found</h2>
        <Button asChild className="mt-8">
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <Button asChild variant="outline" className="mb-8">
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        <Card className="overflow-hidden">
          {projectImage && (
            <div className="relative w-full aspect-video">
              <Image
                src={projectImage.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
                data-ai-hint={projectImage.imageHint}
              />
            </div>
          )}
          <CardHeader>
            <CardTitle className="text-3xl font-bold">{project.title}</CardTitle>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
              ))}
            </div>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-primary"><GanttChartSquare /> Project Overview</h3>
              <p className="text-foreground/80">{project.overview}</p>
            </div>
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-primary"><Target /> Problem Statement</h3>
              <p className="text-foreground/80">{project.problem}</p>
            </div>
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-primary"><Goal /> Solution</h3>
              <p className="text-foreground/80">{project.solution}</p>
            </div>
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-primary"><Zap /> Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                {project.features.map(feature => <li key={feature}>{feature}</li>)}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-primary"><TrendingUp /> Impact</h3>
              <p className="text-foreground/80">{project.impact}</p>
            </div>

            <div className="flex gap-4 pt-4">
              <Button asChild>
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Project
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
