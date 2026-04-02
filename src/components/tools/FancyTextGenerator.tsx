'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Copy, CopyCheck, Download, Trash2, Wand2 } from 'lucide-react';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { fancyTextStyles } from '@/lib/fancy-text';
import { Separator } from '../ui/separator';

export function FancyTextGenerator() {
  const [text, setText] = useState('TextToolPro');
  const [copiedStyle, setCopiedStyle] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(10);
  const { copy } = useCopyToClipboard();

  const handleCopy = (styleName: string, styledText: string) => {
    copy(styledText);
    setCopiedStyle(styleName);
    setTimeout(() => setCopiedStyle(null), 2000);
  };

  const handleCopyAll = () => {
    const allStyles = fancyTextStyles
      .map(style => `${style.name}:\n${style.transform(text)}`)
      .join('\n\n');
    copy(allStyles, "All styles copied!");
  };

  const generatedStyles = fancyTextStyles.map(style => ({
    ...style,
    styledText: style.transform(text),
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wand2 className="h-6 w-6" />
          <span>Fancy Text Generator</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your text here..."
            className="min-h-[100px] text-lg"
          />
          <div className="flex flex-wrap gap-2">
            <Button onClick={handleCopyAll} disabled={!text}>
              <Download className="mr-2 h-4 w-4" /> Copy All
            </Button>
            <Button variant="outline" onClick={() => setText('')} disabled={!text}>
              <Trash2 className="mr-2 h-4 w-4" /> Clear
            </Button>
          </div>

          <Separator />
          
          <div className="space-y-4">
            {generatedStyles.slice(0, visibleCount).map((style) => (
              <div key={style.name} className="flex items-center justify-between gap-4 rounded-lg border p-3">
                <p className="text-lg flex-1 overflow-x-auto whitespace-nowrap pb-2">{style.styledText || "..."}</p>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  onClick={() => handleCopy(style.name, style.styledText)}
                  disabled={!text}
                  aria-label={`Copy ${style.name} style`}
                >
                  {copiedStyle === style.name ? (
                    <CopyCheck className="h-5 w-5 text-green-500" />
                  ) : (
                    <Copy className="h-5 w-5" />
                  )}
                </Button>
              </div>
            ))}
          </div>

          {visibleCount < fancyTextStyles.length && (
            <div className="text-center">
              <Button onClick={() => setVisibleCount(prev => prev + 10)}>
                Load More
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
