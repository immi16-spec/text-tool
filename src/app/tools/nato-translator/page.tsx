import { ToolPageWrapper } from '@/components/tools/ToolPageWrapper';
import { tools } from '@/lib/tools';
import type { Metadata } from 'next';
import { NatoTranslator } from '@/components/tools/NatoTranslator';

const tool = tools.find(t => t.path.endsWith('/nato-translator'))!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.description,
  keywords: ['nato phonetic alphabet', 'nato translator', 'phonetic alphabet', 'spelling alphabet', 'radio communication'],
  openGraph: {
    title: tool.name,
    description: tool.description,
    url: tool.path,
  },
  alternates: {
    canonical: tool.path,
  },
};

export default function NatoTranslatorPage() {
  return (
    <ToolPageWrapper tool={tool}>
      <NatoTranslator />
    </ToolPageWrapper>
  );
}
