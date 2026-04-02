'use server';

import {ai, defaultTextModel} from '@/ai/genkit';
import {z} from 'genkit';

const GrammarAndTranslateTextInputSchema = z.object({
  text: z.string(),
  targetLanguage: z.string().optional(),
  tone: z.string().optional(),
});

const GrammarAndTranslateTextOutputSchema = z.object({
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
  return grammarAndTranslateTextFlow(input);
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
    // Prompt ko call karein
    const {output} = await grammarAndTranslateTextPrompt(input);
    if (!output) {
      throw new Error('AI Response empty');
    }
    return output;
  }
);
