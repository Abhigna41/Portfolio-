'use client';

import { Toaster } from '@/components/ui/toaster';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import FloatingSocials from '@/components/floating-socials';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
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
    </ThemeProvider>
  );
}
