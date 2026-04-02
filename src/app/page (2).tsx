import { ToolCard } from '@/components/ToolCard';
import { Button } from '@/components/ui/button';
import { tools } from '@/lib/tools';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const mainTool = tools.find(tool => tool.isMain);
  const otherTools = tools.filter(tool => !tool.isMain);

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="text-center">
        <h1 className="bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
          The Ultimate Text Toolkit
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          A complete suite of free, fast, and modern text utilities. Instantly transform, analyze, and generate text with zero hassle.
        </p>
        {mainTool && (
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href={mainTool.path}>
                Start with {mainTool.name}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        )}
      </header>

      <section className="mt-16">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          All The Tools You Need
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tools.map((tool) => (
            <ToolCard key={tool.path} tool={tool} />
          ))}
        </div>
      </section>
    </div>
  );
}
