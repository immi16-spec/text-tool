'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { Copy, Trash2, Eraser } from 'lucide-react';
import { Separator } from '../ui/separator';

export function SpaceRemover() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const { copy } = useCopyToClipboard();

  const removeExtraSpaces = () => {
    setOutputText(inputText.trim().replace(/\s+/g, ' '));
  };

  const removeLineBreaks = () => {
    setOutputText(inputText.replace(/(\r\n|\n|\r)/gm, ' ').replace(/\s+/g, ' '));
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
              placeholder="Paste text with extra spaces here..."
              className="min-h-[250px] text-base"
            />
            <div className="flex flex-wrap gap-2">
              <Button onClick={removeExtraSpaces} disabled={!inputText}>
                <Eraser className="mr-2 h-4 w-4" /> Remove Extra Spaces
              </Button>
              <Button onClick={removeLineBreaks} disabled={!inputText}>
                <Eraser className="mr-2 h-4 w-4" /> Remove Line Breaks
              </Button>
            </div>
          </div>

          {/* Output */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Output</h3>
            <Textarea
              value={outputText}
              readOnly
              placeholder="Cleaned text will appear here..."
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
