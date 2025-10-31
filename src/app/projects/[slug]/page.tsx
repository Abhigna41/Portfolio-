
import { PROJECTS } from '@/app/lib/portfolio-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { notFound } from 'next/navigation';
import ProjectDetailClientPage from './project-detail-client-page';

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const projectImage = PlaceHolderImages.find(p => p.id === project.image);

  return <ProjectDetailClientPage project={project} projectImage={projectImage} />;
}
