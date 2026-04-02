import { ToolPageWrapper } from '@/components/tools/ToolPageWrapper';
import { tools } from '@/lib/tools';
import type { Metadata } from 'next';
import { GrammarTranslateTool } from '@/components/tools/GrammarTranslateTool';

const tool = tools.find(t => t.path.endsWith('/grammar-checker-translate'))!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.description,
  keywords: ['grammar checker', 'translator', 'proofreading tool', 'language corrector', 'translate text'],
  openGraph: {
    title: tool.name,
    description: tool.description,
    url: tool.path,
  },
  alternates: {
    canonical: tool.path,
  },
};

export default function GrammarCheckerTranslatePage() {
  return (
    <ToolPageWrapper tool={tool}>
      <GrammarTranslateTool />
    </ToolPageWrapper>
  );
}
