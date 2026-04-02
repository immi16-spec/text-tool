'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { submitGrammarTranslateAction } from '@/app/tools/grammar-checker-translate/actions';
import type { GrammarAndTranslateTextOutput } from '@/ai/flows/grammar-and-translate-text';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { Languages, Loader2, Copy, Trash2 } from 'lucide-react';
import { Separator } from '../ui/separator';

const formSchema = z.object({
  text: z.string().min(5, { message: 'Please enter at least 5 characters.' }),
  targetLanguage: z.string().optional(),
});

const NO_TRANSLATION_VALUE = '__no_translation__';

const languages = [
  { value: 'Spanish', label: 'Spanish' },
  { value: 'French', label: 'French' },
  { value: 'German', label: 'German' },
  { value: 'Japanese', label: 'Japanese' },
  { value: 'Chinese', label: 'Chinese' },
  { value: 'Russian', label: 'Russian' },
  { value: 'Arabic', label: 'Arabic' },
];

export function GrammarTranslateTool() {
  const [output, setOutput] = useState<GrammarAndTranslateTextOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { copy } = useCopyToClipboard();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { text: '', targetLanguage: NO_TRANSLATION_VALUE },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setOutput(null);
    setError(null);
    try {
      const result = await submitGrammarTranslateAction({
        text: values.text,
        targetLanguage:
          values.targetLanguage === NO_TRANSLATION_VALUE
            ? undefined
            : values.targetLanguage,
      });
      setOutput(result);
    } catch (e) {
      console.error(e);
      setError('An error occurred while processing your request. Please try again.');
    }
  }
  
  const handleClear = () => {
    form.reset({ text: '', targetLanguage: NO_TRANSLATION_VALUE });
    setOutput(null);
    setError(null);
  }

  return (
    <Card>
      <CardContent className="p-6 space-y-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Text</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter text to correct and/or translate..."
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="targetLanguage"
              render={({ field }) => {
                const normalizedSelectValue =
                  field.value && field.value.trim() !== ''
                    ? field.value
                    : NO_TRANSLATION_VALUE

                return (
                  <FormItem>
                    <FormLabel>Translate to (Optional)</FormLabel>
                    <Select onValueChange={field.onChange} value={normalizedSelectValue}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="No translation" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={NO_TRANSLATION_VALUE}>No translation</SelectItem>
                        {languages
                          .filter((lang) => lang.value.trim() !== '')
                          .map((lang) => (
                            <SelectItem key={lang.value} value={lang.value}>
                              {lang.label}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <div className="flex flex-wrap gap-2">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Languages className="mr-2 h-4 w-4" />
                )}
                Process Text
              </Button>
               <Button type="button" variant="outline" onClick={handleClear} disabled={isSubmitting}>
                <Trash2 className="mr-2 h-4 w-4" /> Clear
              </Button>
            </div>
          </form>
        </Form>
        
        {isSubmitting && (
          <div className="flex items-center justify-center p-8">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="ml-4 text-muted-foreground">AI is thinking...</p>
          </div>
        )}
        
        {error && <p className="text-destructive">{error}</p>}

        {output && (
          <div className="space-y-6 rounded-lg border p-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Corrected Text</h3>
              <p className="text-muted-foreground bg-muted p-3 rounded-md">{output.correctedText}</p>
              <Button size="sm" variant="ghost" onClick={() => copy(output.correctedText)}>
                <Copy className="mr-2 h-4 w-4" /> Copy
              </Button>
            </div>

            {output.translatedText && (
              <>
                <Separator/>
                <div className="space-y-2">
                  <h3 className="font-semibold">Translated Text</h3>
                  <p className="text-muted-foreground bg-muted p-3 rounded-md">{output.translatedText}</p>
                   <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => {
                      if (output.translatedText) {
                        copy(output.translatedText);
                      }
                    }}
                  >
                    <Copy className="mr-2 h-4 w-4" /> Copy
                  </Button>
                </div>
              </>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
