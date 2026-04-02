import { ToolPageWrapper } from '@/components/tools/ToolPageWrapper';
import { tools } from '@/lib/tools';
import type { Metadata } from 'next';
import { WordCounter } from '@/components/tools/WordCounter';

const tool = tools.find(t => t.path.endsWith('/word-counter'))!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.description,
  keywords: ['word count', 'character count', 'sentence count', 'text analyzer', 'word counter'],
  openGraph: {
    title: tool.name,
    description: tool.description,
    url: tool.path,
  },
  alternates: {
    canonical: tool.path,
  },
};

export default function WordCounterPage() {
  return (
    <ToolPageWrapper tool={tool}>
      <WordCounter />
    </ToolPageWrapper>
  );
}
