'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen, ExternalLink } from 'lucide-react';
import type { PUBLICATIONS } from '@/app/lib/portfolio-data';

type Publication = (typeof PUBLICATIONS)[0];

interface PublicationDetailClientPageProps {
  pub: Publication;
}

export default function PublicationDetailClientPage({ pub }: PublicationDetailClientPageProps) {
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
            <CardTitle className="text-3xl font-bold">{pub.title}</CardTitle>
            <p className="text-muted-foreground pt-2">{pub.authors}</p>
            <p className="text-sm italic text-muted-foreground">{pub.journal} (Paper ID: {pub.paperID})</p>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-primary"><BookOpen /> Abstract</h3>
              <p className="text-foreground/80 whitespace-pre-wrap">{pub.abstract}</p>
            </div>
            
            <div className="flex gap-4 pt-4">
              <Button asChild>
                <Link href={pub.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Full Publication
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
