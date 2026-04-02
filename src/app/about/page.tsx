import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About TextToolPro',
  description:
    'Learn what TextToolPro is, why we built it, and how our free text tools help students, creators, marketers, and professionals work faster online.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="max-w-3xl space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">About TextToolPro</h1>
        <p className="text-lg text-muted-foreground">
          TextToolPro is a free online toolkit built to make everyday writing and text formatting
          tasks easier. Whether you need to count words, generate stylish text, clean spacing,
          create URL slugs, translate copy, or refine grammar, the goal is simple: give you fast,
          browser-based tools that solve real problems without friction.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold">What We Offer</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Practical text tools for creators, students, freelancers, marketers, developers, and
            anyone who wants clean results quickly. Every tool is designed to be easy to use,
            responsive, and available without creating an account.
          </p>
        </article>
        <article className="rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Our Purpose</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            We want utility websites to feel trustworthy and genuinely helpful. That means clear
            navigation, readable content, fast load times, and useful explanations around each
            tool so visitors understand what the tool does and when to use it.
          </p>
        </article>
        <article className="rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Our Mission</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Our mission is to provide simple, reliable, and accessible text utilities that save
            time while protecting usability. TextToolPro stays focused on free access, no signup
            requirements, and a clean interface that respects the visitor experience.
          </p>
        </article>
      </section>

      <section className="mt-10 rounded-2xl border bg-muted/40 p-6">
        <h2 className="text-2xl font-semibold">Who TextToolPro Is For</h2>
        <p className="mt-4 leading-7 text-muted-foreground">
          TextToolPro is useful for a broad range of visitors. Students can use it to check word
          counts and clean essays. Social media managers can create stylized bios and captions.
          Developers and SEO specialists can generate slugs or normalize copied content. Business
          users can polish messages with grammar support and translation features. We build around
          these everyday tasks because practical tools earn trust when they solve a real need
          quickly and clearly.
        </p>
        <p className="mt-4 leading-7 text-muted-foreground">
          If you want to ask a question, report an issue, or suggest a new tool, visit our{' '}
          <Link href="/contact" className="font-medium text-primary hover:underline">
            contact page
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
