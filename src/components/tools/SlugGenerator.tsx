'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { Copy, Trash2 } from 'lucide-react';

export function SlugGenerator() {
  const [text, setText] = useState('This is an Example Title!');
  const { copy } = useCopyToClipboard();

  const slug = useMemo(() => {
    if (!text) return '';
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '') // remove non-word chars
      .replace(/[\s_-]+/g, '-') // collapse whitespace and replace by -
      .replace(/^-+|-+$/g, ''); // remove leading/trailing dashes
  }, [text]);

  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <h3 className="text-lg font-semibold">Input Text</h3>
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a title or text..."
          className="min-h-[150px] text-base"
        />

        <h3 className="text-lg font-semibold">Generated Slug</h3>
        <div className="flex items-center gap-2">
            <Textarea
              value={slug}
              readOnly
              placeholder="your-slug-will-appear-here"
              className="text-base bg-muted font-mono"
            />
        </div>
        <div className="flex flex-wrap gap-2">
            <Button onClick={() => copy(slug)} disabled={!slug}>
                <Copy className="mr-2 h-4 w-4" /> Copy Slug
            </Button>
            <Button variant="outline" onClick={() => setText('')} disabled={!text}>
                <Trash2 className="mr-2 h-4 w-4" /> Clear
            </Button>
        </div>
      </CardContent>
    </Card>
  );
}
