import Link from 'next/link';
import { Button } from './ui/button';
import { Mail, Github, Linkedin } from 'lucide-react';
import Icon from './icon-map';

export default function FloatingSocials() {
  const socials = [
    { name: 'Email', icon: 'mail', url: 'mailto:abhignagunda1@gmail.com' },
    { name: 'GitHub', icon: 'github', url: 'https://github.com/Abhigna41' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/naga-abhigna-gunda-aa1002247/' }
  ];

  return (
    <div className="fixed right-4 bottom-4 z-50">
      <div className="flex flex-col gap-2">
        {socials.map((social) => (
          <Button key={social.name} asChild size="icon" className="group rounded-full text-primary-foreground bg-primary hover:bg-primary/90">
            <Link href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
              <Icon name={social.icon} className="h-5 w-5 transition-transform duration-300 group-hover:scale-125 group-hover:animate-jiggle" />
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
