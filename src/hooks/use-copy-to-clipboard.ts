'use client';

import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export function useCopyToClipboard() {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const { toast } = useToast();

  const copy = async (text: string, message: string = "Copied to clipboard!") => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      toast({
        title: 'Error',
        description: 'Clipboard access is not supported in your browser.',
        variant: 'destructive',
      });
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      toast({
        title: message,
      });
      return true;
    } catch (error) {
      console.warn('Copy failed', error);
      toast({
        title: 'Copy failed',
        description: 'Could not copy text to clipboard.',
        variant: 'destructive',
      });
      setCopiedText(null);
      return false;
    }
  };

  return { copiedText, copy };
}
