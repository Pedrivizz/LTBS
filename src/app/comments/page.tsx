'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Send, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function LeaveCommentPage() {
  const [comment, setComment] = useState('');
  const [submittedComments, setSubmittedComments] = useState<string[]>([]);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      setSubmittedComments((prev) => [comment, ...prev]);
      setComment('');
      toast({
        title: "Comment Sent!",
        description: "Your delicious idea has been received.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Empty Plate!",
        description: "Please write a comment before sending.",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter mb-4">
          Share Your Ideas!
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80">
          If you leave your plate here, we'll send it to be made right away.
        </p>
      </header>

      <div className="max-w-2xl mx-auto">
        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Textarea
                placeholder="Leave your comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={5}
              />
              <Button type="submit" className="w-full sm:w-auto">
                Send Comment <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>

        {submittedComments.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold font-headline text-center mb-6">
              Recent Comments
            </h2>
            <div className="space-y-4">
              {submittedComments.map((c, i) => (
                <Card key={i} className="bg-secondary/30">
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="bg-primary/20 text-primary p-2 rounded-full mt-1">
                      <User className="h-5 w-5" />
                    </div>
                    <p className="flex-1 text-foreground/90 pt-1">{c}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
