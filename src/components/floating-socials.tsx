
import Link from 'next/link';
import { Button } from './ui/button';
import Icon from './icon-map';
import { SOCIAL_LINKS } from '@/app/lib/portfolio-data';

export default function FloatingSocials() {

  return (
    <div className="fixed right-4 bottom-4 z-50">
      <div className="flex flex-col gap-2">
        {SOCIAL_LINKS.map((social) => (
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
