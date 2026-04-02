'use server';

import {ai, defaultTextModel} from '@/ai/genkit';
import {z} from 'genkit';

export const GrammarAndTranslateTextInputSchema = z.object({
  text: z
    .string()
    .trim()
    .min(1, {message: 'Text is required'})
    .max(1000, {message: 'Max 1000 characters allowed'}),
  targetLanguage: z.string().trim().optional(),
  tone: z.string().trim().optional(),
});

export const GrammarAndTranslateTextOutputSchema = z.object({
  correctedText: z.string(),
  translatedText: z.string().optional(),
});

export type GrammarAndTranslateTextInput = z.infer<
  typeof GrammarAndTranslateTextInputSchema
>;
export type GrammarAndTranslateTextOutput = z.infer<
  typeof GrammarAndTranslateTextOutputSchema
>;

export async function grammarAndTranslateText(
  input: GrammarAndTranslateTextInput
) {
  const validatedInput = GrammarAndTranslateTextInputSchema.parse(input);
  return grammarAndTranslateTextFlow(validatedInput);
}

const grammarAndTranslateTextPrompt = ai.definePrompt({
  name: 'grammarAndTranslateTextPrompt',
  model: defaultTextModel,
  input: {schema: GrammarAndTranslateTextInputSchema},
  output: {schema: GrammarAndTranslateTextOutputSchema},
  prompt: `
    You are an expert linguistic assistant. 
    Fix the grammar of this text: "{{text}}"
    Tone: {{#if tone}}{{tone}}{{else}}standard{{/if}}
    {{#if targetLanguage}}Translate to: {{targetLanguage}}{{/if}}
    Return JSON with 'correctedText' and 'translatedText'.
  `,
});

const grammarAndTranslateTextFlow = ai.defineFlow(
  {
    name: 'grammarAndTranslateTextFlow',
    inputSchema: GrammarAndTranslateTextInputSchema,
    outputSchema: GrammarAndTranslateTextOutputSchema,
  },
  async (input) => {
    try {
      const {output} = await grammarAndTranslateTextPrompt(input);

      if (!output) {
        throw new Error('AI response was empty.');
      }

      return output;
    } catch (error) {
      console.error('grammarAndTranslateTextFlow failed', error);
      throw new Error('Unable to process text right now. Please try again.');
    }
  }
);
