import Link from 'next/link';
import { Button } from './ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function FloatingSocials() {
  const socials = [
    { name: 'Email', icon: Mail, url: 'mailto:hello@example.com' },
    { name: 'GitHub', icon: Github, url: 'https://github.com' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' }
  ];

  return (
    <div className="fixed right-4 top-4 z-50">
      <div className="flex flex-col gap-2">
        {socials.map((social) => (
          <Button key={social.name} asChild size="icon" className="group rounded-full text-primary-foreground bg-primary hover:bg-primary/90">
            <Link href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
              <social.icon className="h-5 w-5 transition-transform duration-300 group-hover:animate-jiggle" />
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
