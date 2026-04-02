'use client';

import { useState, useMemo } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Type, Pilcrow, MessageCircle, BarChartHorizontal } from 'lucide-react';
import { Button } from '../ui/button';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';

export function WordCounter() {
  const [text, setText] = useState('');
  const { copy } = useCopyToClipboard();

  const stats = useMemo(() => {
    const trimmedText = text.trim();
    const words = trimmedText ? trimmedText.split(/\s+/).length : 0;
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, '').length;
    const sentences = text.match(/[\w|)][.?!]+(\s|$)/g)?.length || 0;
    const paragraphs = trimmedText ? trimmedText.split(/\n+/).length : 0;
    return { words, characters, charactersNoSpaces, sentences, paragraphs };
  }, [text]);

  const statItems = [
    { icon: Type, label: 'Words', value: stats.words },
    { icon: BarChartHorizontal, label: 'Characters', value: stats.characters },
    { icon: BarChartHorizontal, label: 'Characters (no spaces)', value: stats.charactersNoSpaces },
    { icon: MessageCircle, label: 'Sentences', value: stats.sentences },
    { icon: Pilcrow, label: 'Paragraphs', value: stats.paragraphs },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste your text here..."
          className="min-h-[300px] text-base"
        />
        <div className="flex gap-2 mt-4">
            <Button onClick={() => copy(text)} disabled={!text}>Copy Text</Button>
            <Button variant="outline" onClick={() => setText('')} disabled={!text}>Clear</Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {statItems.map((item, index) => (
              <li key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <item.icon className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="font-medium">{item.label}</span>
                </div>
                <span className="font-bold text-lg">{item.value.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
