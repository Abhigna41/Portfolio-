
'use client';

import { PUBLICATIONS } from '@/app/lib/portfolio-data';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function PublicationSection() {
  return (
    <section id="publications" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Publications</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {PUBLICATIONS.map((pub, index) => (
              <Card key={index} className="transition-shadow duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{pub.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{pub.authors}</p>
                  <p className="text-sm italic">{pub.journal}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                   <Button asChild variant="link" className="p-0 h-auto">
                     <Link href={`/publications/${pub.slug}`}>
                       View Details <ArrowRight className="ml-2 h-4 w-4" />
                     </Link>
                   </Button>
                   <Button asChild>
                     <Link href={pub.link} target="_blank" rel="noopener noreferrer">
                       <ExternalLink className="mr-2 h-4 w-4" />
                       View Publication
                     </Link>
                   </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
