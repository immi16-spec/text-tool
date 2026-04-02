import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { tools } from '@/lib/tools';
import { ArrowRight, CaseUpper, Sparkles, Type } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

const fancyTextTool = tools.find(t => t.path.endsWith('/fancy-text-generator'))!;
const caseConverterTool = tools.find(t => t.path.endsWith('/case-converter'))!;
const wordCounterTool = tools.find(t => t.path.endsWith('/word-counter'))!;

export const metadata: Metadata = {
  title: 'YouTube Title Tools - Optimize Your Video Titles',
  description: 'Tools to help you create better, more clickable YouTube titles. Use our Case Converter, Word Counter, and Fancy Text Generator to optimize your videos for more views.',
  keywords: ['youtube tools', 'youtube title generator', 'youtube title optimizer', 'case converter for titles', 'youtube word counter'],
  alternates: {
    canonical: '/youtube-title-tools',
  },
};

export default function YouTubeTitleToolsPage() {

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          Tools for Better YouTube Titles
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Craft the perfect, attention-grabbing title for your YouTube videos to get more clicks and views.
        </p>
      </header>

      <section className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="flex flex-col">
            <CardHeader>
                <div className="flex items-center gap-3">
                    <CaseUpper className="h-8 w-8 text-primary" />
                    <CardTitle>Case Converter</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-muted-foreground">Easily switch your title to "Title Case" or "ALL CAPS" to see which looks more powerful and clickable.</p>
            </CardContent>
            <div className="p-6 pt-0">
                <Button asChild>
                    <Link href={caseConverterTool.path}>Use Case Converter <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>
        </Card>
        <Card className="flex flex-col">
            <CardHeader>
                <div className="flex items-center gap-3">
                    <Type className="h-8 w-8 text-primary" />
                    <CardTitle>Word/Character Counter</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-muted-foreground">Keep your titles concise and effective. Make sure you don't exceed YouTube's truncation limit (around 60-70 characters).</p>
            </CardContent>
            <div className="p-6 pt-0">
                <Button asChild>
                    <Link href={wordCounterTool.path}>Use Word Counter <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>
        </Card>
        <Card className="flex flex-col">
            <CardHeader>
                <div className="flex items-center gap-3">
                    <Sparkles className="h-8 w-8 text-primary" />
                    <CardTitle>Fancy Text Generator</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-muted-foreground">Add special characters or bold/italic styles to your title to make it stand out in search results and suggested videos feeds.</p>
            </CardContent>
             <div className="p-6 pt-0">
                <Button asChild>
                    <Link href={fancyTextTool.path}>Use Fancy Text <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>
        </Card>
      </section>

       <section className="mt-12 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Tips for Writing Great YouTube Titles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
             <ol className="list-decimal list-inside space-y-3">
              <li><strong>Be Accurate and Descriptive:</strong> Your title should accurately reflect the video's content. Misleading titles (clickbait) can hurt your channel's reputation and watch time.</li>
              <li><strong>Include Keywords:</strong> Think about what users would search for to find your video. Include the most important keywords at the beginning of your title.</li>
              <li><strong>Keep it Concise:</strong> Long titles get cut off in search results and suggested videos. Aim for under 70 characters to ensure the full title is visible. Use our <Link href={wordCounterTool.path} className="font-semibold text-primary hover:underline">Word Counter</Link> to check the length.</li>
              <li><strong>Use Numbers and Power Words:</strong> Numbers (e.g., "5 Tips for...") and emotional/power words (e.g., "Amazing," "Ultimate," "Secret") can increase click-through rates.</li>
              <li><strong>Use Proper Case:</strong> "Title Case" is generally the most professional and readable format for video titles. Avoid using all lowercase. ALL CAPS can be effective for emphasis but use it sparingly. Try different styles with our <Link href={caseConverterTool.path} className="font-semibold text-primary hover:underline">Case Converter</Link>.</li>
            </ol>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
