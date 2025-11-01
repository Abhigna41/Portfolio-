'use client';

import { useState, useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import FloatingSocials from '@/components/floating-socials';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import PageLoader from '@/components/page-loader';

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Demo purpose: hide loader after 500ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <PageLoader />}
      <div className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
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
      </div>
    </>
  );
}
