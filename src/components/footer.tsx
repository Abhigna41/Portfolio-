import { Code2 } from "lucide-react";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/app/lib/portfolio-data";
import { Button } from "./ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Code2 className="h-6 w-6 text-primary" />
            <span>ProFolio</span>
          </Link>
          <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
            <p>&copy; {currentYear} ProFolio. All rights reserved.</p>
          </div>
          <div className="flex gap-2">
            {SOCIAL_LINKS.map((link) => (
              <Button key={link.name} asChild variant="ghost" size="icon">
                <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  <link.icon className="h-5 w-5" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
