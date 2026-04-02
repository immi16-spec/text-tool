import { ToolPageWrapper } from '@/components/tools/ToolPageWrapper';
import { tools } from '@/lib/tools';
import type { Metadata } from 'next';
import { SlugGenerator } from '@/components/tools/SlugGenerator';

const tool = tools.find(t => t.path.endsWith('/slug-generator'))!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.description,
  keywords: ['slug generator', 'url slug', 'seo friendly url', 'permalink generator', 'slugify'],
  openGraph: {
    title: tool.name,
    description: tool.description,
    url: tool.path,
  },
  alternates: {
    canonical: tool.path,
  },
};

export default function SlugGeneratorPage() {
  return (
    <ToolPageWrapper tool={tool}>
      <SlugGenerator />
    </ToolPageWrapper>
  );
}
