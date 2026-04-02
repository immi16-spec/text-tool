'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { Copy, Trash2, ListFilter, Type } from 'lucide-react';

export function DuplicateRemover() {
  const [inputText, setInputText] = useState('apple\nbanana\napple\norange\nbanana');
  const [outputText, setOutputText] = useState('');
  const { copy } = useCopyToClipboard();

  const removeDuplicateLines = () => {
    const lines = inputText.split('\n');
    const uniqueLines = [...new Set(lines)];
    setOutputText(uniqueLines.join('\n'));
  };

  const removeDuplicateWords = () => {
    const words = inputText.split(/\s+/);
    const uniqueWords = words.filter((item, pos) => words.indexOf(item) === pos);
    setOutputText(uniqueWords.join(' '));
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
              placeholder="Paste text with duplicates here..."
              className="min-h-[250px] text-base"
            />
            <div className="flex flex-wrap gap-2">
              <Button onClick={removeDuplicateLines} disabled={!inputText}>
                <ListFilter className="mr-2 h-4 w-4" /> Remove Duplicate Lines
              </Button>
              <Button onClick={removeDuplicateWords} disabled={!inputText}>
                <Type className="mr-2 h-4 w-4" /> Remove Duplicate Words
              </Button>
            </div>
          </div>

          {/* Output */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Output</h3>
            <Textarea
              value={outputText}
              readOnly
              placeholder="Unique text will appear here..."
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
