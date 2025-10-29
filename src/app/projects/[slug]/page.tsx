import { PROJECTS } from '@/app/lib/portfolio-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';

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
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Project not found</h1>
                    <p className="text-muted-foreground mt-4">Sorry, we couldn't find the project you're looking for.</p>
                    <Button asChild className="mt-8">
                        <Link href="/#projects">Back to Projects</Link>
                    </Button>
                </div>
            </main>
            <Footer />
        </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <Button asChild variant="outline" className="mb-8">
            <Link href="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          
          {projectImage && (
            <div className="relative w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden mb-8 shadow-lg">
              <Image
                src={projectImage.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
                data-ai-hint={projectImage.imageHint}
              />
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-2xl font-semibold">About this project</h2>
              <p className="text-muted-foreground text-lg">{project.description}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-lg py-1 px-3">{tech}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
