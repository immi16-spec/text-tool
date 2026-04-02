import { ToolPageWrapper } from '@/components/tools/ToolPageWrapper';
import { tools } from '@/lib/tools';
import type { Metadata } from 'next';
import { CaseConverter } from '@/components/tools/CaseConverter';

const tool = tools.find(t => t.path.endsWith('/case-converter'))!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.description,
  keywords: ['case converter', 'uppercase', 'lowercase', 'title case', 'sentence case', 'text case'],
  openGraph: {
    title: tool.name,
    description: tool.description,
    url: tool.path,
  },
  alternates: {
    canonical: tool.path,
  },
};

export default function CaseConverterPage() {
  return (
    <ToolPageWrapper tool={tool}>
      <CaseConverter />
    </ToolPageWrapper>
  );
}
