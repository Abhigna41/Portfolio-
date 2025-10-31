
import { PUBLICATIONS } from '@/app/lib/portfolio-data';
import { notFound } from 'next/navigation';
import PublicationDetailClientPage from './publication-detail-client-page';

export function generateStaticParams() {
  return PUBLICATIONS.map((pub) => ({
    slug: pub.slug,
  }));
}

export default async function PublicationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pub = PUBLICATIONS.find((p) => p.slug === slug);

  if (!pub) {
    notFound();
  }

  return <PublicationDetailClientPage pub={pub} />;
}
