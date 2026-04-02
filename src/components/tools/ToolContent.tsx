import type { Tool } from '@/lib/tools';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { AdSlot } from '@/components/ads/AdSlot';

export function ToolContent({ tool }: { tool: Tool }) {
  return (
    <div className="mt-12 space-y-12">
      <Card>
        <CardHeader>
          <CardTitle>About the {tool.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg">What is this tool?</h3>
            <p className="mt-2 text-muted-foreground">{tool.content.what}</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">How to use it?</h3>
            <p className="mt-2 text-muted-foreground">{tool.content.how}</p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Use Cases</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {tool.content.useCases.map((useCase, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <h4 className="font-semibold">{useCase.title}</h4>
                <p className="text-muted-foreground">{useCase.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <AdSlot className="mid-ad" />

      <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="mt-6 w-full">
            {tool.faq.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
    </div>
  );
}
