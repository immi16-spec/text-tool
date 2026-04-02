'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { Copy, Trash2 } from 'lucide-react';

export function CaseConverter() {
  const [text, setText] = useState('Hello World! This is an example sentence.');
  const { copy } = useCopyToClipboard();

  const toUpperCase = () => setText(text.toUpperCase());
  const toLowerCase = () => setText(text.toLowerCase());
  
  const toTitleCase = () => {
    setText(
      text.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase())
    );
  };
  
  const toSentenceCase = () => {
    setText(
      text.toLowerCase().replace(/(^\w{1}|\.\s*\w{1})/gi, (char) => char.toUpperCase())
    );
  };

  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here..."
          className="min-h-[200px] text-base"
        />
        <div className="flex flex-wrap gap-2">
          <Button onClick={toUpperCase} disabled={!text}>UPPERCASE</Button>
          <Button onClick={toLowerCase} disabled={!text}>lowercase</Button>
          <Button onClick={toTitleCase} disabled={!text}>Title Case</Button>
          <Button onClick={toSentenceCase} disabled={!text}>Sentence case</Button>
          <Button variant="secondary" onClick={() => copy(text)} disabled={!text}>
            <Copy className="mr-2 h-4 w-4" /> Copy
          </Button>
          <Button variant="outline" onClick={() => setText('')} disabled={!text}>
            <Trash2 className="mr-2 h-4 w-4" /> Clear
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
