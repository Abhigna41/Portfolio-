import { Code2 } from "lucide-react";
import Link from "next/link";

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
          <div className="w-28"></div>
        </div>
      </div>
    </footer>
  );
}
