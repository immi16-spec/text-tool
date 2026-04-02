'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { Copy, Trash2 } from 'lucide-react';
import { natoPhoneticAlphabet } from '@/lib/constants';

export function NatoTranslator() {
  const [text, setText] = useState('Hello');
  const { copy } = useCopyToClipboard();

  const translatedText = useMemo(() => {
    if (!text) return '';
    return text
      .toUpperCase()
      .split('')
      .map(char => natoPhoneticAlphabet[char as keyof typeof natoPhoneticAlphabet] || char)
      .join(' ');
  }, [text]);

  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Input</h3>
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text to translate..."
              className="min-h-[200px] text-base"
            />
          </div>

          {/* Output */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">NATO Phonetic Alphabet</h3>
            <Textarea
              value={translatedText}
              readOnly
              placeholder="Translation appears here..."
              className="min-h-[200px] text-base bg-muted"
            />
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button onClick={() => copy(translatedText)} disabled={!translatedText}>
            <Copy className="mr-2 h-4 w-4" /> Copy Translation
          </Button>
          <Button variant="outline" onClick={() => setText('')} disabled={!text}>
            <Trash2 className="mr-2 h-4 w-4" /> Clear
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
