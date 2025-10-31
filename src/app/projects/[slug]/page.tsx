
import { PROJECTS } from '@/app/lib/portfolio-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Target, Lightbulb, CheckCircle, BarChart, ArrowUpCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailsPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  const projectImage = PlaceHolderImages.find(p => p.id === project?.image);

  if (!project) {
    return (
        <div className="flex-grow flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Project not found</h1>
                <p className="text-muted-foreground mt-4">Sorry, we couldn't find the project you're looking for.</p>
                <Button asChild className="mt-8">
                    <Link href="/#projects">Back to Projects</Link>
                </Button>
            </div>
        </div>
    );
  }

  const renderSection = (title: string, content: string | string[], icon: React.ElementType) => {
    if (!content) return null;
    const Icon = icon;
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Icon className="h-6 w-6 text-primary" />
            <span>{title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          {Array.isArray(content) ? (
            <ul className="list-disc list-inside space-y-2">
              {content.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          ) : (
            <p className="leading-relaxed">{content}</p>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <Button asChild variant="outline" className="mb-8">
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{project.title}</h1>
          <p className="text-xl text-muted-foreground">{project.description}</p>
        </header>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column for Image and Tech */}
          <aside className="lg:col-span-1 space-y-8">
            {projectImage && (
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative w-full aspect-video">
                    <Image
                      src={projectImage.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                      data-ai-hint={projectImage.imageHint}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Technologies Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-base py-1 px-3">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>
          
          {/* Right Column for Details */}
          <div className="lg:col-span-2 space-y-8">
            {project.projectOverview && renderSection("Project Overview", project.projectOverview, Lightbulb)}
            
            {project.problemStatement && renderSection(project.problemStatement.title, project.problemStatement.content, Target)}
            
            {project.solutionDeveloped && renderSection(project.solutionDeveloped.title, project.solutionDeveloped.content, CheckCircle)}

            {project.keyFeatures && renderSection("Key Features", project.keyFeatures, CheckCircle)}
            
            {project.impact && renderSection("Impact", project.impact, BarChart)}
            
            {project.futureEnhancements && renderSection("Future Enhancements", project.futureEnhancements, ArrowUpCircle)}
          </div>
        </div>
      </div>
    </div>
  );
}
