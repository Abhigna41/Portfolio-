import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutSection() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-photo');

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            {aboutImage && (
              <Card className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                <CardContent className="p-0">
                  <Image
                    src={aboutImage.imageUrl}
                    alt="About me photo"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                    data-ai-hint={aboutImage.imageHint}
                  />
                </CardContent>
              </Card>
            )}
          </div>
          <div className="md:col-span-2 text-center md:text-left space-y-4">
            <p className="text-lg text-muted-foreground">
              I am a passionate and results-driven Full-Stack Developer with a knack for creating intuitive and dynamic user interfaces. With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life from concept to deployment.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and hiking in the great outdoors. I am always eager to learn and grow, both personally and professionally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
