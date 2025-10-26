'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useAuth, useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { initiateEmailSignIn, initiateEmailSignUp } from '@/firebase/non-blocking-login';
import { Github, Loader2 } from 'lucide-react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

export default function LoginPage() {
  const { toast } = useToast();
  const auth = useAuth();
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  if (isUserLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
      </div>
    );
  }

  if (user) {
    router.replace('/admin/dashboard');
    return null;
  }
  
  const handleGoogleSignIn = async () => {
    if (!auth) return;
    setIsSubmitting(true);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast({
        title: 'Signed in successfully!',
        description: "You're now logged in.",
      });
      router.push('/admin/dashboard');
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: 'Uh oh! Something went wrong.',
        description: error.message || 'Failed to sign in with Google.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!auth) {
        toast({
            variant: "destructive",
            title: "Authentication service not available.",
            description: "Please try again later.",
        });
        return;
    }

    setIsSubmitting(true);
    try {
        await signInWithEmailAndPassword(auth, values.email, values.password);
        toast({
            title: 'Signed in!',
            description: "You've successfully logged in.",
        });
        router.push('/admin/dashboard');
    } catch (signInError: any) {
        if (signInError.code === 'auth/user-not-found') {
            try {
                await createUserWithEmailAndPassword(auth, values.email, values.password);
                toast({
                    title: 'Account created!',
                    description: "You've been signed up and logged in.",
                });
                router.push('/admin/dashboard');
            } catch (signUpError: any) {
                toast({
                    variant: "destructive",
                    title: 'Sign up failed.',
                    description: signUpError.message,
                });
            }
        } else {
            toast({
                variant: "destructive",
                title: 'Sign in failed.',
                description: signInError.message,
            });
        }
    } finally {
        setIsSubmitting(false);
    }
}

  return (
    <main className="flex items-center justify-center min-h-screen bg-secondary p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle>Admin Login</CardTitle>
          <CardDescription>Enter your credentials to access the dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Sign In / Sign Up
              </Button>
            </form>
          </Form>
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <Button variant="outline" className="w-full" onClick={handleGoogleSignIn} disabled={isSubmitting}>
            {isSubmitting ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 126 23.4 172.9 61.9l-76.2 76.2c-23.1-22.5-55.2-35.2-96.7-35.2-80.1 0-145.5 65.2-145.5 145.5s65.4 145.5 145.5 145.5c70.9 0 125.3-33.6 138.3-81.2h-138.3v-102.3h238.1c1.3 12.2 2 24.4 2 36.8z"></path></svg>
            )}
            Google
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}