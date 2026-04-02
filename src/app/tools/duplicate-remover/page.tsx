import { ToolPageWrapper } from '@/components/tools/ToolPageWrapper';
import { tools } from '@/lib/tools';
import type { Metadata } from 'next';
import { DuplicateRemover } from '@/components/tools/DuplicateRemover';

const tool = tools.find(t => t.path.endsWith('/duplicate-remover'))!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.description,
  keywords: ['duplicate remover', 'remove duplicate lines', 'unique lines', 'remove duplicate words', 'list cleaner'],
  openGraph: {
    title: tool.name,
    description: tool.description,
    url: tool.path,
  },
  alternates: {
    canonical: tool.path,
  },
};

export default function DuplicateRemoverPage() {
  return (
    <ToolPageWrapper tool={tool}>
      <DuplicateRemover />
    </ToolPageWrapper>
  );
}
