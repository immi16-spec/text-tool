import { ToolPageWrapper } from '@/components/tools/ToolPageWrapper';
import { tools } from '@/lib/tools';
import type { Metadata } from 'next';
import { LoremIpsumGenerator } from '@/components/tools/LoremIpsumGenerator';

const tool = tools.find(t => t.path.endsWith('/lorem-ipsum-generator'))!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.description,
  keywords: ['lorem ipsum generator', 'placeholder text', 'dummy text', 'text generator', 'design tools'],
  openGraph: {
    title: tool.name,
    description: tool.description,
    url: tool.path,
  },
  alternates: {
    canonical: tool.path,
  },
};

export default function LoremIpsumGeneratorPage() {
  return (
    <ToolPageWrapper tool={tool}>
      <LoremIpsumGenerator />
    </ToolPageWrapper>
  );
}
