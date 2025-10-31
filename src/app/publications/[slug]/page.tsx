
'use client';

import { useParams } from 'next/navigation';
import { PUBLICATIONS } from '@/app/lib/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function PublicationDetailPage() {
  const params = useParams();
  const slug = params.slug;

  const publication = PUBLICATIONS.find((p) => p.slug === slug);

  if (!publication) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 text-center">
        <h2 className="text-2xl font-bold text-destructive">Publication not found</h2>
        <Button asChild className="mt-8">
          <Link href="/#publications">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Publications
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <Button asChild variant="outline" className="mb-8">
          <Link href="/#publications">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Publications
          </Link>
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">{publication.title}</CardTitle>
            <p className="text-muted-foreground pt-2">{publication.authors}</p>
            <p className="text-sm italic text-muted-foreground">{publication.journal}</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Abstract</h3>
              <p className="text-foreground/80 leading-relaxed">{publication.abstract}</p>
            </div>
            
            {publication.paperID && (
                <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">Paper ID</h3>
                    <p>{publication.paperID}</p>
                </div>
            )}

            <div className="flex gap-4">
              <Button asChild>
                <Link href={publication.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Publication
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
