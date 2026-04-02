'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { Copy, Trash2, Pilcrow } from 'lucide-react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const LOREM_IPSUM_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Praesent ac sem eget est egestas volutpat. In hac habitasse platea dictumst. Nullam et orci eu lorem consequat imperdiet. Donec iaculis metus nec odio luctus, at convallis ante consectetur. Vivamus sit amet semper lacus, in mollis libero. In hac habitasse platea dictumst. Morbi sed elit eget turpis laoreet euismod. Suspendisse potenti. Nam quis est eget velit pharetra rhoncus.';

export function LoremIpsumGenerator() {
  const [paragraphs, setParagraphs] = useState(3);
  const [generatedText, setGeneratedText] = useState('');
  const { copy } = useCopyToClipboard();

  const generateText = () => {
    let text = '';
    for (let i = 0; i < paragraphs; i++) {
      text += LOREM_IPSUM_TEXT + (i < paragraphs - 1 ? '\n\n' : '');
    }
    setGeneratedText(text);
  };
  
  const handleClear = () => {
    setGeneratedText('');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Generator Controls</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-end gap-4">
          <div className="flex-1">
            <Label htmlFor="paragraphs">Number of Paragraphs</Label>
            <Input
              id="paragraphs"
              type="number"
              value={paragraphs}
              onChange={(e) => setParagraphs(Math.max(1, parseInt(e.target.value) || 1))}
              min="1"
            />
          </div>
          <Button onClick={generateText}>
            <Pilcrow className="mr-2 h-4 w-4" /> Generate
          </Button>
        </div>

        <Textarea
          value={generatedText}
          readOnly
          placeholder="Generated Lorem Ipsum text will appear here..."
          className="min-h-[250px] text-base bg-muted"
        />

        <div className="flex flex-wrap gap-2">
          <Button onClick={() => copy(generatedText)} disabled={!generatedText}>
            <Copy className="mr-2 h-4 w-4" /> Copy
          </Button>
          <Button variant="outline" onClick={handleClear} disabled={!generatedText}>
            <Trash2 className="mr-2 h-4 w-4" /> Clear
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
