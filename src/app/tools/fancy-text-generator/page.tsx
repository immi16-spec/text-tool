import { ToolPageWrapper } from '@/components/tools/ToolPageWrapper';
import { tools } from '@/lib/tools';
import type { Metadata } from 'next';
import { FancyTextGenerator } from '@/components/tools/FancyTextGenerator';

const tool = tools.find(t => t.path.endsWith('/fancy-text-generator'))!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.description,
  keywords: ['fancy text', 'font generator', 'instagram fonts', 'twitter fonts', 'stylish text', 'copy and paste fonts'],
  openGraph: {
    title: tool.name,
    description: tool.description,
    url: tool.path,
  },
  alternates: {
    canonical: tool.path,
  },
};

export default function FancyTextGeneratorPage() {
  return (
    <ToolPageWrapper tool={tool}>
      <FancyTextGenerator />
    </ToolPageWrapper>
  );
}
