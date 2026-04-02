import { AdSlot } from '@/components/ads/AdSlot';
import { ToolCard } from '@/components/ToolCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { tools } from '@/lib/tools';
import { ArrowRight, BadgeCheck, ShieldCheck, WandSparkles } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

const mainTool = tools.find((tool) => tool.isMain)!;
const featuredTools = tools.slice(0, 4);

export const metadata: Metadata = {
  title: 'TextToolPro - Free Text Tools for Writing, Formatting, and Productivity',
  description:
    'Use free online text tools for fancy fonts, word counting, grammar checks, slug generation, spacing cleanup, and more. Fast, simple, and no signup required.',
  keywords: [
    'free text tools',
    'online text utilities',
    'word counter',
    'fancy text generator',
    'grammar checker',
    'slug generator',
  ],
  alternates: {
    canonical: '/',
  },
};

const benefits = [
  {
    title: 'Useful Daily Tools',
    description:
      'TextToolPro focuses on tools people actually use, from quick word counts and case conversion to grammar cleanup and fancy social text.',
    icon: WandSparkles,
  },
  {
    title: 'Free and Frictionless',
    description:
      'Visitors can use the tools instantly with no signup wall, no unnecessary steps, and a layout designed to keep the tool experience front and center.',
    icon: BadgeCheck,
  },
  {
    title: 'Clean and Trustworthy',
    description:
      'Each page includes helpful supporting content, clear navigation, and compliance-friendly structure so the site feels reliable for both users and reviewers.',
    icon: ShieldCheck,
  },
];

export default function HomePage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <AdSlot className="top-ad" />

      <header className="text-center">
        <h1 className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
          Free Text Tools That Save Time
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground sm:text-xl">
          TextToolPro brings together practical text utilities for creators, students,
          marketers, developers, and business users who need fast results without clutter.
          From writing support to formatting fixes, every tool is built to be quick, clear,
          and genuinely useful.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href={mainTool.path}>
              Start with {mainTool.name}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/about">Learn About TextToolPro</Link>
          </Button>
        </div>
      </header>

      <section className="mt-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Tools</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Start with our most frequently used utilities and move between tools without losing
              the clean, focused experience.
            </p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.path} tool={tool} />
          ))}
        </div>
      </section>

      <AdSlot className="mid-ad mt-16" />

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <Card key={benefit.title} className="border-border/80">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <section className="mt-16 rounded-3xl border bg-muted/40 p-8">
        <h2 className="text-3xl font-bold tracking-tight">Why This Site Is Different</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <p className="leading-7 text-muted-foreground">
            Many utility sites overwhelm visitors with aggressive layouts or thin pages that offer
            very little context. TextToolPro takes the opposite approach. Each major tool includes
            clear explanations, practical use cases, and FAQs so visitors understand the value of
            the tool before and after they use it. That makes the experience better for people and
            creates a stronger foundation for search visibility and advertising compliance.
          </p>
          <p className="leading-7 text-muted-foreground">
            We also keep the interface intentionally simple. Ads, when added later, have reserved
            spaces outside interactive tool areas so the writing workflow stays uninterrupted. That
            separation matters because visitors should never mistake advertising for tool controls
            or feel pushed away from the content they came to use.
          </p>
        </div>
      </section>

      <section id="explore-all-tools" className="mt-16 scroll-mt-24">
        <h2 className="text-center text-3xl font-bold tracking-tight">Explore All Tools</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tools.map((tool) => (
            <ToolCard key={tool.path} tool={tool} />
          ))}
        </div>
      </section>
    </div>
  );
}
