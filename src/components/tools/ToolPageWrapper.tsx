import type { Tool } from '@/lib/tools';
import { Badge } from '@/components/ui/badge';
import { Flame } from 'lucide-react';
import { RelatedTools } from './RelatedTools';
import { ToolContent } from './ToolContent';
import { FaqSchema } from './FaqSchema';
import { AdSlot } from '@/components/ads/AdSlot';

export function ToolPageWrapper({ tool, children }: { tool: Tool; children: React.ReactNode }) {
  return (
    <>
      <div className="container mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* 1. HERO SECTION */}
        <section className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            {tool.name}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {tool.description}
          </p>
          <div className="mt-6 flex justify-center">
            <Badge variant="secondary" className="py-1 px-4 text-sm">
              <Flame className="mr-2 h-4 w-4 text-orange-500" />
              Free • No Signup • Instant Results
            </Badge>
          </div>
        </section>

        {/* 2. MAIN TOOL UI */}
        <section className="mt-8">
          {children}
        </section>

        <AdSlot className="top-ad mt-8" />

        {/* 3. CONTENT */}
        <ToolContent tool={tool} />

      </div>

      {/* 4. RELATED TOOLS */}
      <RelatedTools currentToolPath={tool.path} />

      {/* 5. FAQ SCHEMA (for SEO) */}
      <FaqSchema tool={tool} />
    </>
  );
}
