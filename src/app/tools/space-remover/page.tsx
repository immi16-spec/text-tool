import { ToolPageWrapper } from '@/components/tools/ToolPageWrapper';
import { tools } from '@/lib/tools';
import type { Metadata } from 'next';
import { SpaceRemover } from '@/components/tools/SpaceRemover';

const tool = tools.find(t => t.path.endsWith('/space-remover'))!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.description,
  keywords: ['space remover', 'remove extra spaces', 'trim text', 'clean spaces', 'text cleaner'],
  openGraph: {
    title: tool.name,
    description: tool.description,
    url: tool.path,
  },
  alternates: {
    canonical: tool.path,
  },
};

export default function SpaceRemoverPage() {
  return (
    <ToolPageWrapper tool={tool}>
      <SpaceRemover />
    </ToolPageWrapper>
  );
}
