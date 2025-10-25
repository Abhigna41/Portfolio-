"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Code2, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { getAuth } from 'firebase/auth'; // Import auth from your Firebase config
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User } from 'firebase/auth'; // Import Firebase auth methods
import { useToast } from '@/hooks/use-toast'; // Import the useToast hook
import { app } from '@/lib/firebase';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast(); // Get the toast function
  const auth = getAuth(app);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribe();
    }
  }, [auth]);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast({
        title: "Logged In",
        description: "You have successfully logged in.",
      });
    } catch (error) {
      console.error("Login failed:", error);
      toast({
        title: "Login Failed",
        description: "There was an error logging in. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      toast({
        title: "Logged Out",
        description: "You have successfully logged out.",
      });
    } catch (error) {
      console.error("Logout failed:", error);
      toast({
        title: "Logout Failed",
        description: "There was an error logging out. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-sm border-b' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Code2 className="h-6 w-6 text-primary" />
          <span>ProFolio</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
          {user ? (
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={user.photoURL || undefined} alt={user.displayName || 'User'} />
                <AvatarFallback>{user.displayName?.charAt(0)}</AvatarFallback>
              </Avatar>
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          ) : (
            <Button onClick={handleLogin}>Login</Button>
          )}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col items-start gap-6 p-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
                  <Code2 className="h-6 w-6 text-primary" />
                  <span>ProFolio</span>
                </Link>
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-lg font-medium hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                ))}
                {user ? (
                   <div className="flex flex-col w-full gap-4">
                     <div className='flex items-center gap-2'>
                        <Avatar>
                          <AvatarImage src={user.photoURL || undefined} alt={user.displayName || 'User'} />
                          <AvatarFallback>{user.displayName?.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span>{user.displayName}</span>
                     </div>
                    <Button onClick={handleLogout} className="w-full">Logout</Button>
                  </div>
                ) : (
                  <Button onClick={handleLogin} className="w-full">Login</Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
