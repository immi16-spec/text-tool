import { genkit } from 'genkit';
import { groq, llama33x70bVersatile } from 'genkitx-groq';

export const defaultTextModel = llama33x70bVersatile;

export const ai = genkit({
  plugins: [groq({ apiKey: process.env.GROQ_API_KEY })],
  model: defaultTextModel,
});
