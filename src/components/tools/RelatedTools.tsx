import { tools } from '@/lib/tools';
import { ToolCard } from '../ToolCard';

export function RelatedTools({ currentToolPath }: { currentToolPath: string }) {
  const relatedTools = tools
    .filter(tool => tool.path !== currentToolPath)
    .sort(() => 0.5 - Math.random()) // Shuffle to show different tools
    .slice(0, 4);

  return (
    <section className="mt-16 bg-muted/50 py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          Explore Other Tools
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {relatedTools.map(tool => (
            <ToolCard key={tool.path} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
