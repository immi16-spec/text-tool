'use server';

import {
  grammarAndTranslateText,
  type GrammarAndTranslateTextInput,
  type GrammarAndTranslateTextOutput,
} from '@/ai/flows/grammar-and-translate-text';

export async function submitGrammarTranslateAction(
  input: GrammarAndTranslateTextInput
): Promise<GrammarAndTranslateTextOutput> {
  return grammarAndTranslateText(input);
}
