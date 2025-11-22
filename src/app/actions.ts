'use server';

import { generateBioFromKeywords } from '@/ai/flows/generate-bio-from-keywords';
import { z } from 'zod';

const bioSchema = z.object({
  keywords: z.string().min(3, 'Please enter at least one keyword.'),
});

type BioState = {
  bio: string;
  error: string;
};

export async function generateBioAction(
  prevState: BioState,
  formData: FormData,
): Promise<BioState> {
  const validatedFields = bioSchema.safeParse({
    keywords: formData.get('keywords'),
  });

  if (!validatedFields.success) {
    return {
      bio: '',
      error: validatedFields.error.flatten().fieldErrors.keywords?.[0] || 'Invalid input.',
    };
  }

  try {
    const output = await generateBioFromKeywords({ keywords: validatedFields.data.keywords });
    if (output.bio) {
      return { bio: output.bio, error: '' };
    }
    return { bio: '', error: 'Failed to generate bio. Please try again.' };
  } catch (error) {
    console.error(error);
    return { bio: '', error: 'An unexpected error occurred. Please try again later.' };
  }
}
