import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { FirebaseClientProvider } from '@/firebase';
import FloatingSocials from '@/components/floating-socials';
import Footer from '@/components/footer';
import Header from '@/components/header';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'A personal portfolio to showcase professional work, skills, and projects.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground" suppressHydrationWarning>
        <FirebaseClientProvider>
          <div className="flex flex-col min-h-screen">
            <FloatingSocials />
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </FirebaseClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
