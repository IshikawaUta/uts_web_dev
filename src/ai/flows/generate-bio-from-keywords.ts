'use server';
/**
 * @fileOverview AI-powered bio generator flow.
 *
 * - generateBioFromKeywords - A function that generates a bio from keywords.
 * - GenerateBioFromKeywordsInput - The input type for the generateBioFromKeywords function.
 * - GenerateBioFromKeywordsOutput - The return type for the generateBioFromKeywords function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBioFromKeywordsInputSchema = z.object({
  keywords: z
    .string()
    .describe('Comma separated keywords related to skills and experience.'),
});
export type GenerateBioFromKeywordsInput = z.infer<typeof GenerateBioFromKeywordsInputSchema>;

const GenerateBioFromKeywordsOutputSchema = z.object({
  bio: z.string().describe('A compelling bio generated from the keywords.'),
});
export type GenerateBioFromKeywordsOutput = z.infer<typeof GenerateBioFromKeywordsOutputSchema>;

export async function generateBioFromKeywords(input: GenerateBioFromKeywordsInput): Promise<GenerateBioFromKeywordsOutput> {
  return generateBioFromKeywordsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBioFromKeywordsPrompt',
  input: {schema: GenerateBioFromKeywordsInputSchema},
  output: {schema: GenerateBioFromKeywordsOutputSchema},
  prompt: `You are a professional bio writer. Generate a compelling bio based on the following keywords: {{{keywords}}}. The bio should be no more than 150 words.`,
});

const generateBioFromKeywordsFlow = ai.defineFlow(
  {
    name: 'generateBioFromKeywordsFlow',
    inputSchema: GenerateBioFromKeywordsInputSchema,
    outputSchema: GenerateBioFromKeywordsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
