'use client';

import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { generateBioAction } from '@/app/actions';
import { SectionHeading } from '@/components/section-heading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Bot, Loader2, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Bot className="mr-2 h-4 w-4" />}
      Generate Bio
    </Button>
  );
}

export function AiBioGenerator() {
  const initialState = { bio: '', error: '' };
  const [state, formAction] = useFormState(generateBioAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.error) {
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: state.error,
      });
    }
  }, [state.error, toast]);
  
  const copyToClipboard = () => {
    if (state.bio) {
      navigator.clipboard.writeText(state.bio);
      toast({
        title: 'Copied to clipboard!',
        description: 'The generated bio has been copied.',
      });
    }
  };


  return (
    <section id="ai-bio" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <SectionHeading>AI-Powered Bio Generator</SectionHeading>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Stuck on your profile bio? Enter some keywords about your skills and experience, and let our AI craft a compelling summary for you.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Bio Crafting Studio</CardTitle>
              <CardDescription>
                Enter comma-separated keywords (e.g., "React, UI/UX, full-stack, Next.js").
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form action={formAction} className="space-y-4">
                <div className="grid w-full gap-2">
                  <Label htmlFor="keywords">Keywords</Label>
                  <Textarea
                    id="keywords"
                    name="keywords"
                    placeholder="e.g., Creative Developer, TypeScript, Team Player, Problem Solver"
                    required
                  />
                </div>
                <SubmitButton />
              </form>

              {state.bio && (
                <div className="mt-6 space-y-4 rounded-lg border bg-secondary/50 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">Generated Bio:</h3>
                    <Button variant="ghost" size="icon" onClick={copyToClipboard}>
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy</span>
                    </Button>
                  </div>
                  <p className="text-muted-foreground">{state.bio}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
