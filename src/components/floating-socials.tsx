import Link from 'next/link';
import { Button } from './ui/button';
import { SOCIAL_LINKS, CONTACT_DETAILS } from '@/app/lib/portfolio-data';

export default function FloatingSocials() {
  const email = CONTACT_DETAILS.find(detail => detail.icon.displayName === 'Mail');
  const github = SOCIAL_LINKS.find(link => link.name === 'GitHub');
  const linkedin = SOCIAL_LINKS.find(link => link.name === 'LinkedIn');

  const socials = [
    ...(email ? [{ ...email, name: 'Email', url: email.href }] : []),
    ...(github ? [github] : []),
    ...(linkedin ? [linkedin] : [])
  ].filter(Boolean);

  return (
    <div className="fixed right-4 bottom-4 z-50">
      <div className="flex flex-col gap-2">
        {socials.map((social) => (
          <Button key={social.name} asChild variant="outline" size="icon" className="group rounded-full bg-background/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground">
            <Link href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
              <social.icon className="h-5 w-5 transition-transform duration-300 group-hover:animate-jiggle" />
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
