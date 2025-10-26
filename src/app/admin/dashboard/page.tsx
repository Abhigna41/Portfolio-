'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser, useCollection, useFirestore } from '@/firebase';
import { collection } from 'firebase/firestore';
import { Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { formatDistanceToNow } from 'date-fns';
import Header from '@/components/header';
import Footer from '@/components/footer';

type ContactMessage = {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: {
    seconds: number;
    nanoseconds: number;
  } | null;
};

export default function AdminDashboardPage() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const firestore = useFirestore();

  const contactMessagesCollection = firestore ? collection(firestore, 'contact_messages') : null;
  const { data: messages, isLoading: messagesLoading } = useCollection<ContactMessage>(contactMessagesCollection);

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.replace('/login');
    }
  }, [user, isUserLoading, router]);

  if (isUserLoading || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
      </div>
    );
  }

  const sortedMessages = messages
  ? [...messages].sort((a, b) => {
      const timeA = a.timestamp ? a.timestamp.seconds : 0;
      const timeB = b.timestamp ? b.timestamp.seconds : 0;
      return timeB - timeA;
    })
  : [];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Messages</CardTitle>
              <CardDescription>Here are the messages submitted through your contact form.</CardDescription>
            </CardHeader>
            <CardContent>
              {messagesLoading ? (
                <div className="flex justify-center items-center h-48">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : (
                <div className="border rounded-md">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[150px]">Received</TableHead>
                        <TableHead className="w-[200px]">From</TableHead>
                        <TableHead>Message</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sortedMessages && sortedMessages.length > 0 ? (
                        sortedMessages.map((msg) => (
                          <TableRow key={msg.id}>
                            <TableCell>
                              {msg.timestamp ? (
                                <Badge variant="outline">
                                  {formatDistanceToNow(new Date(msg.timestamp.seconds * 1000), { addSuffix: true })}
                                </Badge>
                              ) : 'N/A'}
                            </TableCell>
                            <TableCell>
                              <div className="font-medium">{msg.name}</div>
                              <div className="text-sm text-muted-foreground">{msg.email}</div>
                            </TableCell>
                            <TableCell className="whitespace-pre-wrap">{msg.message}</TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={3} className="h-24 text-center">
                            No messages yet.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
