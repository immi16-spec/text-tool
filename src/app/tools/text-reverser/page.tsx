import { ToolPageWrapper } from '@/components/tools/ToolPageWrapper';
import { tools } from '@/lib/tools';
import type { Metadata } from 'next';
import { TextReverser } from '@/components/tools/TextReverser';

const tool = tools.find(t => t.path.endsWith('/text-reverser'))!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.description,
  keywords: ['text reverser', 'reverse text', 'reverse words', 'flip text', 'upside down text'],
  openGraph: {
    title: tool.name,
    description: tool.description,
    url: tool.path,
  },
  alternates: {
    canonical: tool.path,
  },
};

export default function TextReverserPage() {
  return (
    <ToolPageWrapper tool={tool}>
      <TextReverser />
    </ToolPageWrapper>
  );
}
