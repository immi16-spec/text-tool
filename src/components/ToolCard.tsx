import Link from 'next/link';
import { type Tool } from '@/lib/tools';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link href={tool.path} className="group block h-full">
      <Card className="h-full transition-all duration-200 ease-in-out group-hover:-translate-y-1 group-hover:shadow-lg group-hover:border-primary/50">
        <CardHeader className="flex-row items-start gap-4 space-y-0">
          <div className={cn(
            "rounded-lg p-2 bg-primary/10 text-primary",
            tool.isMain && "bg-primary text-primary-foreground"
          )}>
            <tool.icon className="h-6 w-6" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-base font-semibold leading-tight flex items-center gap-2">
              {tool.name}
              {tool.isMain && <Badge variant="default">Main Tool</Badge>}
            </CardTitle>
            <CardDescription className="mt-1 text-sm">
              {tool.description}
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
