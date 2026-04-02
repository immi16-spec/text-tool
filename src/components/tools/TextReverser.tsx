'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { Copy, Trash2, Repeat, Repeat1, FlipVertical } from 'lucide-react';
import { charMaps } from '@/lib/fancy-text';


export function TextReverser() {
  const [inputText, setInputText] = useState('reverse this text');
  const [outputText, setOutputText] = useState('');
  const { copy } = useCopyToClipboard();

  const reverseText = () => {
    setOutputText(inputText.split('').reverse().join(''));
  };

  const reverseWords = () => {
    setOutputText(inputText.split(' ').reverse().join(' '));
  };
  
  const flipText = () => {
    const upsideDownMap = charMaps.upsideDown;
    setOutputText(
      inputText.split('').reverse().map(c => upsideDownMap[c as keyof typeof upsideDownMap] || c).join('')
    );
  };

  const handleClear = () => {
    setInputText('');
    setOutputText('');
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Input</h3>
            <Textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter text to reverse..."
              className="min-h-[250px] text-base"
            />
            <div className="flex flex-wrap gap-2">
              <Button onClick={reverseText} disabled={!inputText}>
                <Repeat className="mr-2 h-4 w-4" /> Reverse Text
              </Button>
              <Button onClick={reverseWords} disabled={!inputText}>
                <Repeat1 className="mr-2 h-4 w-4" /> Reverse Words
              </Button>
              <Button onClick={flipText} disabled={!inputText}>
                <FlipVertical className="mr-2 h-4 w-4" /> Flip Text
              </Button>
            </div>
          </div>

          {/* Output */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Output</h3>
            <Textarea
              value={outputText}
              readOnly
              placeholder="Reversed text appears here..."
              className="min-h-[250px] text-base bg-muted"
            />
            <div className="flex flex-wrap gap-2">
              <Button onClick={() => copy(outputText)} disabled={!outputText}>
                <Copy className="mr-2 h-4 w-4" /> Copy
              </Button>
              <Button variant="outline" onClick={handleClear} disabled={!inputText && !outputText}>
                <Trash2 className="mr-2 h-4 w-4" /> Clear All
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
